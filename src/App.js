// Components
import Header from './components/Header'
import NavBar from './components/NavBar'
import Contact from './components/Contact';
// Pages
import ProjectSection from './pages/projectsPage';
import Home from './pages/home'



function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <NavBar />
      <Contact />

      <ProjectSection />
    </div>
  );
}

export default App;
