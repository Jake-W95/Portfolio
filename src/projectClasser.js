import EventFinderA from './images/projectImgA/EventFinderA.png'
import EventFinderB from './images/projectImgB/EventFinderB.png'

import WeatherAppA from './images/projectImgA/WeatherAppA.jpg'
import WeatherAppB from './images/projectImgB/WeatherAppB.png'

import HangmanA from './images/projectImgA/HangmanA.jpg'
import HangmanB from './images/projectImgB/HangmanB.jpg'



const projectArray = []
// const projectArrayJSON = []
class Project {
    constructor(name, description, tech, link, linkText, imgSrcA, imgSrcB) {
        this.name = name;
        this.description = description;
        this.technologies = tech;
        this.link = link;
        this.linkText = linkText;
        this.imgSrcA = imgSrcA;
        this.imgSrcB = imgSrcB
    }
}
// const projects = [
const EventFinder = new Project(
    "Event Finder",
    "An application that allows users to search for and save events, providing information and useful links (official sites, tickets etc)",
    ["TicketMaster API", "Google Maps API", "moment.js", "JQuery"],
    "https://github.com/Jake-W95/Event_Finder_App",
    "Click here for the GitHub Repository",
    EventFinderA,
    EventFinderB


)
const WeatherApp = new Project(
    "Weather App",
    "An application that allows users to see the weather forecast (1day-hourly / 5day-3hour) for any location, saving previous searches",
    ["OpenWeatherMap API", "moment.js", "FontAwesome", "JQuery"],
    "https://jake-w95.github.io/Weather_Forecast_App",
    "Click here to see the live site",
    WeatherAppA,
    WeatherAppB
)
const HangmanGame = new Project(
    "Hangman Game",
    "Simple Hangman game that pulls words from an API and gives users the definition on successful round.",
    ["WordsAPI", "JQuery"],
    "https://jake-w95.github.io/Hangman_Game/",
    "Click here to play some Hangman!",
    HangmanA,
    HangmanB
)
const TeamGenerator = new Project(
    "Team Profile Generator",
    "Node application that generates an HTML file based on user inputs.",
    ["Node.js", "Jest.js", "Inquire.js"],
    "https://github.com/Jake-W95/TeamProfileGenerator",
    "Please take a look at the GitHub repository",
    "http://careerbright.com/wp-content/uploads/2012/12/corporate-team-building.jpg"
)
const READMEGenerator = new Project(
    "README Generator",
    "Node application that takes user inputs and generates a formatted README file, complete with: license badge, contents table and links.",
    ["Node.js", "Inquirer.js"],
    "https://github.com/Jake-W95/README_Generator",
    "Please take a look at the GitHub repository",
    "https://qph.fs.quoracdn.net/main-qimg-c3b312a0216700ea7ecc79eb75e393f4"
)

projectArray.push(EventFinder, WeatherApp, HangmanGame, TeamGenerator, READMEGenerator)

// for (item of projectArray){
//     JSON.stringify(item);
//     projectArrayJSON.push(item)
// }

export default projectArray
