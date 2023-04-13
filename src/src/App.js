import { Route, Routes } from 'react-router-dom';
import './App.css';
import SidTop from './Components/SidTop';
import Home from './Components/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClint = new QueryClient()
  return (
  <QueryClientProvider client={queryClint}>
    <div className="App bg-gradient">
      <SidTop />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
      </QueryClientProvider>
  );
}

export default App;
