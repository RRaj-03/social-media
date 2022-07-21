import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Dasboard from './components/Dasboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import PostState from './context/Posts/PostState';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState();

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000);
  }
  return (
    <>
    <PostState>
    <BrowserRouter>
    <Navbar alert={alert} />
    <Routes>
        <Route exact path="/" element={<Dasboard/>} />
        <Route exact path='signup' element={<SignUp showAlert={showAlert}  />} />
        <Route exact path='login' element={<LogIn showAlert={showAlert} />} />
    </Routes>
    {/* <Modal/> */}
    <Footer/>
    </BrowserRouter>
    </PostState>
    </>
  );
}

export default App;
