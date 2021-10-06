import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import GlobalConfig from './styles/GlobalConfig';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalConfig />
      <ToastContainer autoClose={4000}  />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
