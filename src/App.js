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
import Admins from './app/pages/admins/Admins';
import SignUp from './app/pages/signup/SignUp';
import Projects from './app/pages/projects/Projects';
import ProjectsEditor from './app/pages/projects/ProjectsEditor';
import CarouselEditor from './app/pages/carousel/CarouselEditor';
import Proyecto from './app/pages/projects/Proyecto';
import Proyectos from './app/pages/projects/Proyectos';
import Reseña from './app/pages/FAQS/Reseña';
import Documentation from './app/pages/documentation/Documentation';
import PropuestaInicial from './app/pages/propuestas/propuesta-inicial/PropuestaInicial';
import PropuestaPrimaria from './app/pages/propuestas/propuesta-primaria/PropuestaPrimaria';

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
        <Route path="/admins" element={<Admins />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-editor" element={<ProjectsEditor />} />
        <Route path="/projects-editor/:id" element={<ProjectsEditor />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyecto/:id" element={<Proyecto />} />
        <Route path="/carrousel-editor" element={<CarouselEditor />} />
        <Route path="/reseña" element={<Reseña />} />
        <Route path="/documentacion" element={<Documentation />} />
        <Route path="/propuesta/inicial" element={<PropuestaInicial />} />
        <Route path="/propuesta/primaria" element={<PropuestaPrimaria />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
