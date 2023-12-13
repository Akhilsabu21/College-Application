
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import AdminHome from './Components/Body/AdminHome/AdminHome';
import Footer from './Components/Footer/Footer';
import Login from './Components/Body/Login/Login';
import Signin from './Components/Body/Signin/Singin';
import staffRegister from './Components/Body/Register/staffRegister';
import Staff from './Components/Body/Staff/Staff';
import StaffEdit from './Components/Body/StaffEdit/StaffEdit';
import StaffHome from './Components/Body/StaffHome/StaffHome';
import StaffLogin from './Components/Body/StaffLogin/Stafflogin';
import StudentRegister from './Components/Body/StudentRegister/StudentRegister';
import Student from './Components/Body/Student/Student';
import AdminOrStaff from './Components/Body/AdminOrStaff/AdminOrStaff';
import Home from './Components/Body/Home/Home';
import StudentLogin from './Components/Body/StudentLogin/StudentLogin';
import StudentHome from './Components/Body/StudentHome/StudentHome';
import StudentEdit from './Components/Body/StudentEdit/StudentEdit';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/adminorstaff' Component={AdminOrStaff}/>
      <Route path='/admin' Component={AdminHome}/>
      <Route path='/login' Component={Login}/>
      <Route path='/signin' Component={Signin}/>
      <Route path='/staffregister' Component={staffRegister}/>
      <Route path='/staff/:id' Component={Staff}/>
      <Route path='/staffedit/:id' Component={StaffEdit}/>
      <Route path='/staffhome' Component={StaffHome}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/studentregister' Component={StudentRegister}/>
      <Route path='/studentedit/:id' Component={StudentEdit}/>
      <Route path='/student/:id' Component={Student}/>
      <Route path='/studentlogin' Component={StudentLogin}/>
      <Route path='/studenthome' Component={StudentHome}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
