import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
// Components
import Header from './components/Header'
import Hero from './components/Hero/Hero'
// Pages
import CVPage from './pages/CVPage/CVpage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage';
// import { Form } from 'react-router-dom';



function App() {
  useEffect(() => { document.title = 'JWDev' }, [])
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
      </HashRouter>
    </div>
  );
}

export default App;
