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
import http from 'services/http';
import { setCurrentProject } from 'redux/slices/currentProject';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    if(auth.isLoggedIn()) {
      dispatch(logIn());
      const url = `/user/project/${auth.getAccountId()}`;
      http.get(url)
        .then(response=>{
          dispatch(setCurrentProject(response.data));
        })
        .catch(error=>{
          console.log('error', error);
        })
    }
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
