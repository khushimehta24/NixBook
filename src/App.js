import { createContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from './router/MainRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CredentialsContext = createContext([])

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])

  return (
    <CredentialsContext.Provider>
      <CssBaseline />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <MainRouter />
      </Router>
    </CredentialsContext.Provider>
  );
}

export default App;
