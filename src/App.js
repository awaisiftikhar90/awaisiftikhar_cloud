import Nav from "./components/Nav";
import './App.css';
import Slider from "./components/Slider";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Counters from "./components/Counters";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav/>
      <Slider/>

      <About/>

      <Resume/>

      <Skills/>

      <Blog/>

      <Counters/>

      <Contact/>
      
      <Footer/>
    </>
  );
}

export default App;
