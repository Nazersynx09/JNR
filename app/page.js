import Header from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Projects from "./Components/Projects/project";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";


export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen">
       <div id="top"></div> 
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

