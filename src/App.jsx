import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import QualificationSection from "./components/Qulifications";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="mx-auto overflow-hidden">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Header />
          <Hero />
          <Skills />
          <QualificationSection />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
