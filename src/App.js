import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Pages/Shared/Header/Header';
import Appointment from './components/Pages/Appointment/Appointment';
import Login from './components/Pages/Login/Login';
import Registration from './components/Pages/Registration/Registration';
import Service from './components/Pages/Service/Service';
import About from './components/Pages/About/About';
import NotFound from './components/Pages/NotFound/NotFound';
import Reviews from './components/Pages/Reviews/Reviews';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Pages/Home/Footer/Footer';
import UpdateUser from './components/Pages/Shared/Header/UpdateUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Loading from './components/Pages/Shared/Loading/Loading';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Dash from './components/Pages/AllUser/UserDash';
import AllUser from './components/Pages/Dashboard/AllUser';
import MyAppointment from './components/Pages/Dashboard/MyAppointment';
import AdminRoute from './components/PrivateRoute/AdminRoute';
import NotAdmin from './components/PrivateRoute/NotAdmin';
import AddDoctor from './components/Pages/Dashboard/AddDoctor';
import ManageDoctor from './components/Pages/Dashboard/ManageDoctor/ManageDoctor';
import Payment from './components/Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto bg-white'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Registration />}></Route>
        <Route path='/reviews' element={<PrivateRoute><Reviews /></PrivateRoute>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<PrivateRoute><Service /></PrivateRoute>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="/dashboard/myappointment" element={<MyAppointment />}></Route>
          <Route path="/dashboard/alluser" element={<AdminRoute> <AllUser /></AdminRoute>}></Route>
          <Route path="/dashboard/adddoctor" element={<AddDoctor />}></Route>
          <Route path="/dashboard/managedoctor" element={<ManageDoctor />}></Route>
          <Route path="/dashboard/payment/:id" loader={'loader'} element={<Payment />}></Route>
          <Route path="/dashboard/notadmin" element={<NotAdmin />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/loading' element={<Dash />}></Route>
        <Route path='/dash' element={<Loading />}></Route>
        <Route path='/updateUser' element={<UpdateUser />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      {/* className='left-1/3' */}
      <ToastContainer />
    </div >
  );
}

export default App;
