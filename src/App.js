import logo from './Logo-casa-transparent.png';
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
          <span>Y soy</span> <span>Rebelde,</span> <span>Cuano no sigo</span> <span>a los demás,</span> <span>Y soy</span> <span>Rebelde.</span>
        </p>
        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/1065541812" width="100%" height="300" frameborder="0" allowtransparency="true" allow="autoPlay; encrypted-media; clipboard-write; fullscreen; picture-in-picture "></iframe>
        
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
