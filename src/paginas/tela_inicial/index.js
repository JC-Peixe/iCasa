import Menu from "../../componentes/Menu";
import styles from "./TelaInicial.module.css"

import "../../App.css";
import logo from "../../assets/img/LOGO-CASA-TRANSPARENTE.png";

export default function Bemvindo() {
  return (
    <div className="App">
      <div className={`${styles.menubar}`}>

      <Menu />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">Seja bem-vindo à Igreja Episcopal Casa</p>
        {/* <button>
          <Link to="/inicio">Visite nosso Site</Link>
        </button> */}
        <p className="slogan">
          <span>Um</span> <span>Lugar</span> <span>de</span>{" "}
          <span>Acolhimento,</span> <span>uma Casa</span>{" "}
          <span>de Adoração.</span>
        </p>
        <iframe
        className="video-musica"
          width="420"
          height="315"
          src="https://www.youtube.com/embed/6uiX1QSYUl8?autoplay=1&mute=1"
        ></iframe>
      </header>
    </div>
  );
}
