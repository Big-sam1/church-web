import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { SermonsPage } from './pages/SermonsPage';
import { LivePage } from './pages/LivePage';
import { EventsPage } from './pages/EventsPage';
import { MinistriesPage } from './pages/MinistriesPage';
import { GivePage } from './pages/GivePage';
import { ContactPage } from './pages/ContactPage';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-text transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/sermons" element={<SermonsPage />} />
              <Route path="/live" element={<LivePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/ministries" element={<MinistriesPage />} />
              <Route path="/give" element={<GivePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>);

}