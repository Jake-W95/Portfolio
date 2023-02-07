import {Routes, Route} from 'react-router-dom'
// Components
import Header from './components/Header'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './components/Contact';
// Pages
import Hero from './components/Hero'
import { Form } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      {/* <ProjectsPage /> */}
      {/* <Contact /> */}

<Routes>
  <Route path='/' element={<Hero/>} />
  <Route path='/projects' element={<ProjectsPage/>} />
  <Route path='/contact' element={<Contact/>} />
  {/* <Route path='*' element={<Contact/>} /> */}

</Routes>
    </div>
  );
}

export default App;
