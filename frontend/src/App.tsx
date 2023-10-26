import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './components/login/login';
import Home from './components/home/home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
