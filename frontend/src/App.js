import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './component/layout/Navbar';
import { Home } from './component/pages/Home';
import { Login } from './component/pages/Login';
import { Register } from './component/pages/Register';
import { About } from './component/pages/About';
import { Alert } from './component/layout/Alert';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='container'>
        <Alert/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
