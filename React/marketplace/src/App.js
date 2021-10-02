import logo from './logo.svg';
/* import './App.css'; */
import HolaMundo, { Adios } from './components/HolaMundo';
import Saludar from './components/Saludar';
import "./App.scss";
import { Layout, Menu, Breadcrumb } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <HolaMundo/>
          <Adios/>
          <Saludar name="Carlos"/>
      </header>
    </div>
    
  );
}

export default App;
