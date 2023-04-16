import { Route, Routes } from 'react-router-dom';
import './App.css';
import SidTop from './Components/SidTop';
import Home from './Components/home/Home';
import Portfolio from './page/Portfolio.jsx';

function App() {
  return (
    <div className="App bg-gradient">
      <SidTop />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </div>
  );
}

export default App;
