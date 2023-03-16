import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
// Components
import Header from './components/Header'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage';
import CVPage from './pages/CVPage/CVpage';
// Pages
import Hero from './components/Hero/Hero'
// import { Form } from 'react-router-dom';



function App() {
  useEffect(() => {document.title = 'JWDev'}, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='CV' element={<CVPage />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
