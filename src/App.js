import logo from './logo.svg';
import './App.css';
import Hello from './drugs/DrugTable';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddDrug from './drugs/AddDrug';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
  <Routes>
    <Route path="/" element={<Hello />} />
    <Route path="/drugs" element={<Hello />} />
    <Route path="/addDrug" element={<AddDrug />} />
  </Routes>
</Router>
  );
}

export default App;
