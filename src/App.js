import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Skills/>
        <Projects/>
        <ContactUs/>
    </div>
  );
}

export default App;
