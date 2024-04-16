import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
        <Sidebar />
        <main>
        <Header />
            {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
