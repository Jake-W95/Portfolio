import { Routes, Route } from 'react-router-dom'
// Components
import Header from './components/Header'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage';
import CVPage from './pages/CVPage/CVpage';
// Pages
import Hero from './components/Hero/Hero'
// import { Form } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />

      <Routes style={{height:'100%'}}>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='CV' element={<CVPage />} />

      </Routes>
    </div>
  );
}

export default App;
