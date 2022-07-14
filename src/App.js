import React, {useEffect} from 'react';
import './App.css';
import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/slices/isLogged';
import Routes from 'views/routes';
import auth from 'services/auth';
import NavBar from 'components/NavBar';
import MainContent from 'components/mainContent';
import Footer from 'components/Footer';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    if(auth.isLoggedIn()) dispatch(logIn());
    //else auth.logOut();
  },[dispatch])

  return (<BrowserRouter>
      <NavBar/>
      <MainContent>
        <Routes/>
        <ToastContainer/>  
      </MainContent>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
