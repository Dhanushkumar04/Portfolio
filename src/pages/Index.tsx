import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Profiles from "@/components/sections/Profiles";
import Contact from "@/components/sections/Contact";
import Internships from "@/components/sections/Internships";

const Index = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Certifications />
        <Internships/>
        <Profiles />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
