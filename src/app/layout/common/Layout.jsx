import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
