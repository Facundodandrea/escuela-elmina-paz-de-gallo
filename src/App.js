import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/home/Home'
import Login from './app/pages/login/Login';
import Article from './app/pages/articles/Article';
import Faqs from './app/pages/FAQS/Faqs';
import Gallery from './app/pages/gallery/Gallery';
import News from './app/pages/news/News';
import Dashboard from './app/pages/dashboard/Dashboard';
import Editor from './app/pages/editor/Editor';
import GalleryEditor from './app/pages/gallery-editor/GalleryEditor';

const App = () => {  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulo" element={<Article />} />
        <Route path="/articulo/:id" element={<Article />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/gallery-editor" element={<GalleryEditor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
