// import "./navbar/navbar"
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
  
function App() {
  return (
    <div className="App">
    
   <Navbar/>
   <Intro/>
   <Skills/>
   <Works/>
   <Contact/>
   <Footer/>
   
   </div>
  );
}

export default App;
