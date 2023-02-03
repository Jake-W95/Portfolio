import Header from './components/Header'
import ProjectItem from './components/ProjectItem'

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectItem 
        projectName="Weather App" 
        projectDescription="This is a description of the project"
        projectLink="https:google.com"
        projectLinkText="Click here to visit the live site"
      />
    </div>
  );
}

export default App;
