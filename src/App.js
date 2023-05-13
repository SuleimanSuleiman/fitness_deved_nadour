import { Route, Routes } from 'react-router-dom';
import './App.css';
import SidTop from './Components/SidTop';
import Home from './page/Home';
import Portfolio from './page/Portfolio.jsx';
import Exercise from './page/Exercise';
import { QueryClient, QueryClientProvider } from 'react-query';
function App() {



  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-gradient">
        <SidTop />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/home' element={<Home />} />
          <Route path='/exercise/:id' element={<Exercise />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
