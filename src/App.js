import logo from './logo.svg';
import './App.css';
import './styles/tailwind.css';
import http from './services/http';
import LoginForm from './views/Login/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    /*{ <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='mb-4 w-40'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
    </div> }*/
    <>
     <LoginForm/>
     <ToastContainer/>  
    </>
    
  );
}

export default App;
