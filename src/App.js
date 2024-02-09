import logo from './LOGO-CASA-TRANSPARENTE.png';
// import  rbd  from './RBD - Rebelde.mp3'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title'>
          Seja bem-vindo à Igreja Casa
        </p>
        <p className='slogan'>
          <span>Um</span> <span>Lugar</span> <span>de</span> <span>Acolhimento,</span> <span>uma Casa</span> <span>de Adoração.</span>
        </p>
        <iframe width="420" height="315"
src="https://www.youtube.com/embed/6uiX1QSYUl8?autoplay=1&mute=1">
</iframe>

{/* Xzbj3r3h7ps */}
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
