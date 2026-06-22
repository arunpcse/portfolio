import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CursorTrail from "./src/components/common/CursorTrail/CursorTrail";
import Navbar from "./src/components/layout/Navbar";
import Footer from "./src/components/layout/Footer";
import AppRoutes from "./src/routes/AppRoutes";
import Loading from "./src/pages/Loading/Loading";

import { AIProvider } from "./src/context/AIContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { UserProvider } from "./src/context/UserContext";
import { PortfolioProvider } from "./src/context/PortfolioContext";

import AIAssistant from "./src/components/common/Modal";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <ThemeProvider>
      <UserProvider>
        <PortfolioProvider>
          <AIProvider>
            {loading ? (
              <Loading />
            ) : (
              <Router>
                <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
                  <Navbar />

                 <main className="flex-grow w-full m-0 p-0 overflow-hidden">
                    <AppRoutes />
                  </main>

                  <Footer />
                </div>
<CursorTrail />
                <AIAssistant />
              </Router>
            )}
          </AIProvider>
        </PortfolioProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;