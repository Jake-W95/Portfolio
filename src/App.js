// Components
import Header from './components/Header'
import NavBar from './components/NavBar'
import Contact from './components/Contact';
// Pages
import ProjectSection from './components/projectsGen';
import Hero from './pages/Hero'



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectSection />
      <Contact />

    </div>
  );
}

export default App;
