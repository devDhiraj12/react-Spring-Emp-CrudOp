
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import EmpEdit from './EmpEdit';
import EmpAdd from './EmpAdd';

function App() {
  return (
    <div >
     {/* <Home/> */}
     {/* <AddEditEmp/> */}
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/edit' element={<EmpEdit/>} />
      <Route path='/addEmp' element={<EmpAdd/>} />
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
