import './App.css';
import Atualiza from './components/Atualiza';
import UsuarioEntrada from './components/UsuarioEntrada';
import UsuarioSaida from './components/UsuarioSaida';

function App() {
  return (
    <div className="App">

    <UsuarioEntrada />

    <UsuarioSaida nome="Dannilo" />
    <UsuarioSaida texto="Para quê tanto código?" />
    <UsuarioSaida texto="Se a vida não é programada e as  melhores coisas não sao feitas com lógica." />
    
    <Atualiza />
    
    </div>
  )
}

export default App;
