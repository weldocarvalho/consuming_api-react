import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalConfig from './styles/GlobalConfig';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalConfig />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
