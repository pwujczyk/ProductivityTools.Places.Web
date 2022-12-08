import './App.css';
import Date from './Components/Date'
import PlaceList from './Components/Place/List'
import PlaceNew from './Components/Place/New';
import PlaceItem from './Components/Place/Item';

import VisitEdit from './Components/Visit/Edit';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PlaceList />} />
          <Route path='/List' element={<PlaceList />} />
          <Route path='/Date' element={<Date />} />
          <Route path='/New' element={<PlaceNew />} />
          <Route path='/Item/:id' element={<PlaceItem />} />
          {/* <Route path='/VisitNew' element={<VisitEdit />} />
          <Route path='/VisitEdit' element={<VisitEdit />} /> */}


        </Routes>
      </Router>
      <Date />
    </div>
  );
}

export default App;

