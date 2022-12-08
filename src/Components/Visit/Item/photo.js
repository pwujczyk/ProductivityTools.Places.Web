
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

function Photo({ photo, setThumbnail }) {
    const [contextMenu, setContextMenu] = useState(null)

    const handleContextMenu = (event) => {
        console.log("handleContextMenu")
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
                // Other native context menus might behave different.
                // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
                null,
        );
    };

    const handleClose = (e) => {
        console.log(e);
        setThumbnail(photo);
        setContextMenu(null);
    };
    return (
        <div className="crop" onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
            {/* <span>{x}</span><br/> */}
            <img src={photo} />

            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                <MenuItem onClick={handleClose}>Set as thumbnail</MenuItem>

            </Menu>
        </div>
    )
}
export default Photo;