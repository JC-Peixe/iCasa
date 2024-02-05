import logo from './Logo-casa-transparent.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title'>
          Igreja Casa
        </p>
        <p className='slogan'>
          <span>Mais</span> <span>que</span> <span>uma</span> <span>Igreja,</span> <span>um</span> <span>Lar.</span>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
