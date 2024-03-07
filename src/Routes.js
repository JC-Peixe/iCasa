import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bemvindo from './paginas/tela_inicial';
import Inicio from './paginas/inicio';
import Oferta from './paginas/ofertas';
import QuemSomos from './paginas/quem_somos';
import Cronograma from './paginas/cronograma';
import NaRua from './paginas/Atividades';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Bemvindo />} />
       <Route path='/agenda' element={<Cronograma/>}/>
       <Route path='/inicio' element={<Inicio/>} />
       <Route path='/narua' element={<NaRua/>} />
       <Route path='/ofertas' element={<Oferta/>} />
       <Route path='/quemsomos' element={<QuemSomos/>} />
       <Route path='*' element={<div><h1>Página não Encontrada</h1></div>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
