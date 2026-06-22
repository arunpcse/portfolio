import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      
      {/* Top Menu */}
      <Navbar />

      {/* Main Content Area (This changes when you click different links) */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Bottom Menu */}
      <Footer />

    </div>
  );
};

export default Layout;