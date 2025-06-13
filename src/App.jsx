import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProjectRequest from './pages/ProjectRequest';
import { Home } from './pages/HOme';
import { SigunupOTP } from './pages/SigunupOTP';
import { Signup_password } from './pages/Signup_password';
import ProfileDisplay from './pages/ProfileDisplay';
import ProfileEdit from './pages/ProfileEdit';
import Emailfp from './pages/forgotPassword/Emailfp';
import { Emailotp } from './pages/forgotPassword/Emailotp';
import { Emailfpreset } from './pages/forgotPassword/Emailfpreset';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-otp" element={<SigunupOTP />} />
          <Route path="/signup-set-password" element={<Signup_password />} />
          <Route path='/profile' element={<ProfileDisplay />} />
          <Route path='/profile-edit' element={<ProfileEdit />} />
          <Route path="/project-request" element={<ProjectRequest />} />
          <Route path="/forgotPassword-email" element={<Emailfp/>} />
          <Route path="/forgotPassword-otp" element={<Emailotp/>} />
          <Route path="/forgotPassword-rest" element={<Emailfpreset/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
