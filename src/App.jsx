import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProjectRequest from './pages/ProjectRequest';
import { Home } from './pages/HOme';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="/project-request" element={ <ProjectRequest/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
