import './styles/global.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Menu from './components/Menu/Menu'
import Home from './pages/Home';
import Insert from './pages/Insert';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Menu />

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/Insert" element={<Insert/>}/>
          <Route path="/Search" element={<Search/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
