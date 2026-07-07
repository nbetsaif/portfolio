import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="saif-portfolio-theme">
      <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <Navbar />
        <main className="flex-1 flex flex-col w-full overflow-hidden">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
