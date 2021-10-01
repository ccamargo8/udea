import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';

class App extends Component{
  render() {
    const siglo = 21;
    const persona={
      nombre:'Carlos',
      edad:34,
    }
    return(
      <div>
        <h1>Prueba 1 react</h1>
        <hr />    
        <p>Estamos en el siglo {siglo}</p>
        <h3>Acceso a un objeto</h3>
        <p>{persona.nombre} tiene {persona.edad} años</p>
        <h3>Llamada a un método</h3>
        <p>Un valor aleatorio llamando a un método.</p>
        {this.retornarAleatorio()}
        <h3>Calculo inmediato de expresiones</h3>
        3 + 3 = {3+3}
      </div>
    );
  }
  retornarAleatorio(){
    return Math.trunc(Math.random()*5);
  }
}
export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
        
        

//       </header>
//     </div>
//   );
// }

// export default App;
