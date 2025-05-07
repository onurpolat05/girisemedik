import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import SubmissionForm from './components/SubmissionForm';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    // Update the document title
    document.title = "Girişemedik - Başarısızlık Hikayeleri";
    
    // Add Garet font
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'fonts/garet.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-sans bg-[#320604] min-h-screen">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <AboutSection />
        <SubmissionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;