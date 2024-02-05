import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './component/layout/Navbar';
import { Home } from './component/pages/Home';
import { Login } from './component/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
