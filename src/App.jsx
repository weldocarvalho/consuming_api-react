import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Routes from './routes';

import GlobalConfig from './styles/GlobalConfig';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <GlobalConfig />
      <ToastContainer autoClose={4000} />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
