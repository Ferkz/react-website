import './App.css';
import About from './componets/about/about';
import NavBar from './componets/navbar/navbar';
import Skills from './componets/skills/skills';
 
function App() {
  return (
    <div className="App">
     <NavBar/>
     <About/>
     <Skills/>
    </div>
  );
}

export default App;
