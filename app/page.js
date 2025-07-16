import Header from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";


export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen">
       <div id="top"></div> 
      <Header />
      <Hero />
      <About />
    </main>
  );
}

