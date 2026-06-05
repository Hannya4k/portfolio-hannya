import { useScroll, useSpring, motion, MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatesPage from "./pages/CertificatesPage";
import Loader from "./components/Loader";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
    <Loader>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "#4ade80",
          transformOrigin: "0%",
          scaleX,
          zIndex: 100,
        }}
      />
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <ExperiencePage />
        <ProjectsPage />
        <CertificatesPage />
        <ContactPage />
      </main>
    </Loader>
    </MotionConfig>
  );
};

export default App;
