import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/game/:gameId' element={<GamePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
