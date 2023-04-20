
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import EmpEdit from './EmpEdit';
import EmpAdd from './EmpAdd';
import Home1 from './Navbar';

function App() {
  return (
    <div >
     <Home1/>
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
