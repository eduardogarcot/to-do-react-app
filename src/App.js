import { BrowserRouter } from 'react-router-dom';
import Routes from 'views/routes';
import { ToastContainer } from 'react-toastify';
import './App.css';
import './styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from 'components/NavBar';
import MainContent from 'components/mainContent';
import Footer from 'components/Footer';

function App() {
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
