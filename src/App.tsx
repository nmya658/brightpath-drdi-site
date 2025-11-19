import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import LiveDemos from './components/LiveDemos';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import udLogo from './logo.png';

// ======================
// FANCY NAVIGATION
// ======================
function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/70 backdrop-blur-md 
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        border-b border-white/40
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* === LOGO FAR LEFT === */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={udLogo}
              alt="UD Logo"
              className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* === CENTERED MENU === */}
          <div className="flex items-center space-x-10">
            {[
              { name: "Home", path: "/" },
              { name: "Achievements", path: "/achievements" },
              { name: "Timeline", path: "/timeline" },
              { name: "Live Demos", path: "/demos" },
              { name: "Downloads", path: "/downloads" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative text-sm font-medium transition-all duration-300
                  ${isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                  }
                `}
              >
                {item.name}

                {/* Animated Underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-blue-600 
                    transition-all duration-300
                    ${isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"}
                  `}
                />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}

// ======================
// PAGE WRAPPER
// ======================
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-20">
      {children}
      <Footer />
    </div>
  );
}

// ======================
// MAIN APP
// ======================
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Hero />} />

          <Route
            path="/achievements"
            element={
              <PageWrapper>
                <Achievements />
              </PageWrapper>
            }
          />

          <Route
            path="/timeline"
            element={
              <PageWrapper>
                <Timeline />
              </PageWrapper>
            }
          />

          <Route
            path="/demos"
            element={
              <PageWrapper>
                <LiveDemos />
              </PageWrapper>
            }
          />

          <Route
            path="/downloads"
            element={
              <PageWrapper>
                <Downloads />
              </PageWrapper>
            }
          />

          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
