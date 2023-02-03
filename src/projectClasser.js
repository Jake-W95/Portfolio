class Project {
    constructor (name, description, tech, link, linkText, imgSrc) {
        this.name = name;
        this.description = description;
        this.technologies = tech;
        this.link = link;
        this.linkText = linkText;
        this. imgSrc = imgSrc
    }
}

const weatherApp = new Project(
    "Event Finder", 
    "An application that allows users to search for and save events, providing information and useful links (official sites, tickets etc)",
    "TicketMaster API", "Google Maps API", "moment.js",
    "https://github.com/Jake-W95/Event_Finder_App",
    "Click here for the GitHub Repository",
    "img source"
    )


    