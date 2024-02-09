import logo from './LOGO-CASA-TRANSPARENTE.png';
// import  rbd  from './RBD - Rebelde.mp3'
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
          <span>Um</span> <span>Igreja</span> <span>Em</span> <span>Comunidade,</span> <span>Somos</span> <span>a Casa.</span>
        </p>
        <iframe width="420" height="315"
src="https://www.youtube.com/embed/Xzbj3r3h7ps?autoplay=1&mute=1">
</iframe>
        
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
