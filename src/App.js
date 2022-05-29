import { BrowserRouter } from 'react-router-dom';
import Routes from 'views/routes';
import { ToastContainer } from 'react-toastify';
import './App.css';
import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<BrowserRouter>
      <Routes/>
      <ToastContainer/>  
    </BrowserRouter>
  );
}

export default App;
