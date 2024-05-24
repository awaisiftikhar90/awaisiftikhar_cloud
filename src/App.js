import Nav from "./components/Nav";
import './App.css';
import Slider from "./components/Slider";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
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
