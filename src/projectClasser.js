import BBEA from './images/projectImgA/BBE.jpg'

import P1HeroesA from './images/projectImgA/P1HeroesA.jpg'
// import P1HeroesB from './images/projectImgB/P1HeroesB.jpg'


import GigStop from './images/projectImgA/GigStop.jpg'
// import EventFinderB from './images/projectImgB/EventFinderB.png'

import WeatherAppA from './images/projectImgA/WeatherAppA.jpg'
// import WeatherAppB from './images/projectImgB/WeatherAppB.png'

import HangmanA from './images/projectImgA/HangmanA.jpg'
// import HangmanB from './images/projectImgB/HangmanB.jpg'

import TeamGeneratorA from './images/projectImgA/TeamGeneratorA.jpg'
// import TeamGeneratorB from './images/projectImgB/TeamGeneratorB.jpg'

import READMEGeneratorA from './images/projectImgA/READMEGeneratorA.jpg'
// import READMEGeneratorB from './images/projectImgB/READMEGeneratorB.png'

import PlannerA from './images/projectImgA/PlannerA.png'
// import PlannerB from './images/projectImgB/PlannerB.jpg'


const projectArray = []
class Project {
    constructor(name, description, tech, liveLink, imgSrcA) {
        this.name = name;
        this.description = description;
        this.technologies = tech;
        this.liveLink = liveLink;
        // this.repoLink = repoLink;
        this.imgSrcA = imgSrcA;
        
    }
}
// const projects = [
    const BBE = new Project(
        "Billy's Bike Exchange",
        'Page for a bicycle repair and maintenance business, providing: a description, carousel of reviews and previous work, contact information including social media links and a mailing form and cards displaying services and costs',
        ['React js', 'Netlify', 'Framer Motion', 'Formspree', 'Pure-React-Carousel', 'Dayjs', 'React-icons'] ,
        'https://billysbikeexchange.netlify.app/',
        BBEA

    )
const P1Heroes = new Project(
    'P1 Heroes!',
    'A slick, professional looking React application for F1 fans displaying news, up-coming race dates, standings and a Top Trumps style card game written from scratch',
    ['React js','Netlify', 'Framer Motion', 'GoogleAPI', 'NewsAPI'],
    'https://p1-heroes.netlify.app/',
    // 'Click Here for the Live Site',
    P1HeroesA,
    // P1HeroesB
)

const GIGStop = new Project(
    'GIGStop',
    'An application that allows users to search for and save events, providing information and useful links (official sites, tickets etc) and music news',
    ['TicketMaster API', 'Google Maps API', 'newsData QPI', 'moment.js', 'JQuery'],
    'https://github.com/Jake-W95/GIGStop',
    // 'Click here for the GitHub Repository',
    GigStop,
    // EventFinderB
)
const WeatherApp = new Project(
    'Weather App',
    'An application that allows users to see the weather forecast (1day-hourly / 5day-3hour) for any location, saving previous searches',
    ['OpenWeatherMap API', 'moment.js', 'FontAwesome', 'JQuery'],
    'https://jake-w95.github.io/Weather_Forecast_App',
    // 'Click here to see the live site',
    WeatherAppA,
    // WeatherAppB
)
const HangmanGame = new Project(
    'Hangman Game',
    'Simple Hangman game that pulls words from an API and gives users the definition on successful round.',
    ['WordsAPI', 'JQuery'],
    'https://jake-w95.github.io/Hangman_Game/',
    // 'Click here to play some Hangman!',
    HangmanA,
    // HangmanB
)
const TeamGenerator = new Project(
    'Team Profile Generator',
    'Node application that generates an HTML file based on user inputs.',
    ['Node.js', 'Jest.js', 'Inquire.js'],
    'https://github.com/Jake-W95/TeamProfileGenerator',
    // 'Please take a look at the GitHub repository',
    TeamGeneratorA,
    // TeamGeneratorB
)
const READMEGenerator = new Project(
    'README Generator',
    'Node application that takes user inputs and generates a formatted README file, complete with: license badge, contents table and links.',
    ['Node.js', 'Inquirer.js'],
    'https://github.com/Jake-W95/README_Generator',
    // 'Please take a look at the GitHub repository',
    READMEGeneratorA,
    // READMEGeneratorB
)
const DailyPlanner = new Project(
    'Daily Planner',
    'Simple planner for 1 day, changing styles depending on the current time',
    ['JQuery', 'moment.js'],
    'https://github.com/Jake-W95/Daily_Planner',
    // 'Please take a look at the GitHub repository',
    PlannerA,
    // PlannerB
)
projectArray.push(P1Heroes, BBE, GIGStop, WeatherApp, HangmanGame, TeamGenerator, READMEGenerator, DailyPlanner)
export default projectArray
