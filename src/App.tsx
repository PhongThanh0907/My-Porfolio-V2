import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <WorkExperience />
          <Technologies />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
