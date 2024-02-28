import { BrowserRouter, Route, Routes } from  "react-router-dom";
import './App.css';
import Nav from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import DashboardMain from "./component/DashBord/DashbordMain";
import Dashboard from "./component/DashBord/Dashbord";
import Profile from "./component/DashBord/Profile";


function App() {
  return (
    <>
   <BrowserRouter>
   <div>
    <Nav/>
    </div>
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='admin' element={<DashboardMain/>}/>
      <Route path='dashbord' element={<Dashboard/>}/>
      <Route path='profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
