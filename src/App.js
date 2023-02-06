// Components
import Header from './components/Header'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './components/Contact';
// Pages
import Hero from './pages/Hero'



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectsPage />
      <Contact />

    </div>
  );
}

export default App;
