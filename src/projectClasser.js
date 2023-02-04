const fs = require('fs');

const projectArray = []
const projectArrayJSON = []
class Project {
    constructor(name, description, tech, link, linkText, imgSrc) {
        this.name = name;
        this.description = description;
        this.technologies = tech;
        this.link = link;
        this.linkText = linkText;
        this.imgSrc = imgSrc
    }
}
// const projects = [
const EventFinder = new Project(
    "Event Finder",
    "An application that allows users to search for and save events, providing information and useful links (official sites, tickets etc)",
    ["TicketMaster API", "Google Maps API", "moment.js", "JQuery"],
    "https://github.com/Jake-W95/Event_Finder_App",
    "Click here for the GitHub Repository",
    "img source"
)
const WeatherApp = new Project(
    "Weather App",
    "An application that allows users to see the weather forecast (1day-hourly / 5day-3hour) for any location, saving previous searches",
    ["OpenWeatherMap API", "moment.js", "FontAwesome", "JQuery"],
    "https://jake-w95.github.io/Weather_Forecast_App",
    "Click here to see the live site",
    "img src"
)
const HangmanGame = new Project(
    "Hangman Game",
    "Simple Hangman game that pulls words from an API and gives users the definition on successful round.",
    ["WordsAPI", "JQuery"],
    "https://jake-w95.github.io/Hangman_Game/",
    "Click here to play some Hangman!",
    "img src"
)
const TeamGenerator = new Project(
    "Team Profile Generator",
    "Node application that generates an HTML file based on user inputs.",
    ["Node.js", "Jest.js", "Inquire.js"],
    "https://github.com/Jake-W95/TeamProfileGenerator",
    "Please take a look at the GitHub repository",
    "img src"
)
const READMEGenerator = new Project(
    "README Generator",
    "Node application that takes user inputs and generates a formatted README file, complete with: license badge, contents table and links.",
    ["Node.js", "Inquirer.js"],
    "https://github.com/Jake-W95/README_Generator",
    "Please take a look at the GitHub repository",
    "img src"
)

projectArray.push(EventFinder, WeatherApp, HangmanGame, TeamGenerator)

// for (item of projectArray){
//     JSON.stringify(item);
//     projectArrayJSON.push(item)
// }

export default projectArray
