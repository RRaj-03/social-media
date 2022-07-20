import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Dasboard from './components/Dasboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import PostState from './context/Posts/PostState';

function App() {
  return (
    <>
    <PostState>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Dasboard/>} />
        <Route exact path='signup' element={<SignUp/>} />
        <Route exact path='login' element={<LogIn/>} />
    </Routes>
    {/* <Modal/> */}
    <Footer/>
    </BrowserRouter>
    </PostState>
    </>
  );
}

export default App;
