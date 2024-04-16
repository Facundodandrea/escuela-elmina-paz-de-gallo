import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/home/Home'
import Login from './app/pages/login/Login';
import Article from './app/pages/articles/Article';

const App = () => {  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulo" element={<Article />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
