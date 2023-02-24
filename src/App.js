import {Routes, Route} from 'react-router-dom'
// Components
import Header from './components/Header'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import Contact from './components/Contact';
import CVpage from './pages/CVpage'
// Pages
import Hero from './components/Hero/Hero'
// import { Form } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />

<Routes>
  <Route path='/' element={<Hero/>} />
  <Route path='/projects' element={<ProjectsPage/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='CV' element={<CVpage />} />

</Routes>
    </div>
  );
}

export default App;
