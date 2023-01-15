import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (



    <div className="App">
          <Helmet>
        <title>Freebirdz.Online | Dev Stuff</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my DEV site.
        </p>
        <a
          className="App-link"
          href="https://deanhome.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freebirdz Online
        </a>
      </header>
    </div>
  );
}

export default App;
