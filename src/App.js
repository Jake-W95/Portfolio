import { HashRouter, Routes, Route } from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
// Pages
import CVPage from './pages/CVPage/CVpage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes >
          <Route path='/' element={<Hero />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='CV' element={<CVPage />} />

        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
