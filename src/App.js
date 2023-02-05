// Components
import Header from './components/Header'
import ProjectSection from './pages/projectsPage';
import ProjectItem from './components/ProjectItem'


function App() {
  return (
    <div className="App">
      <Header />
<div>

      {/* <ProjectSection /> */}

</div>
    
      <ProjectItem 
        projectName="Weather App" 
        projectDescription="This is a description of the project"
        projectLink="google.com"
        projectLinkText="Click here to visit the live site"
        projectImgSource="https://cdn.ebaumsworld.com/mediaFiles/picture/604025/86324436.jpg"
      />
    </div>
  );
}

export default App;
