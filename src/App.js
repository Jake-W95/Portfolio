// Components
import Header from './components/Header'
import NavBar from './components/NavBar'
import Contact from './components/Contact';
// Pages
import ProjectSection from './pages/projectsPage';
import Hero from './pages/Hero'



function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <NavBar />
      <Contact />

      <ProjectSection />
    </div>
  );
}

export default App;
