import { Component, OnInit } from '@angular/core';

/**
 *  
 *  FOR COPY/PASTE PURPOUSES
 * 
    {
        title: "",
        origin: "",
        imageLink: "",
        description: "",
        link: "",
        linkName: ""
    }
 */

interface ProjectContent {
    title: string,
    origin: string,
    imageLink: string,
    description: string,
    link: string,
    linkName: string
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
    projectInfo: ProjectContent[] = []

    constructor() { }

    ngOnInit() {
        // Object array that is iterated through using *ngIf to show related informtion
        // FUTURE - host information in a database
        this.projectInfo = [
            {
                title: "LabOps Inventory Manager",
                origin: "Rochester Institute of Technology - Web Developer Intern",
                imageLink: "/assets/project_imgs/labops_image.jpg",
                description: `
                    LabOps is an Angular-developed management system developed by 
                    RIT's Golisano College of Computing and Information Sciences. 
                    During my internship from May 2023 through December 2023, I was 
                    assigned the responsibility of creating new modules and enhancing 
                    existing ones within LabOps. One of my significant projects involved 
                    developing an inventory manager component to effectively track the 
                    college's physical inventory. This encompassed functionalities such 
                    as searching for items based on specific categories, creating and 
                    editing new item models, and various other tasks. If you would like 
                    to view the codebase, message me at any of my contacts with
                    your GitHub username and reason for viewing.
                `,
                link: "https://github.com/isaacpost/labops-inventory",
                linkName: "Private GitHub"
            },

            {
                title: "Mechanations",
                origin: "Personal Project - Video Game",
                imageLink: "/assets/project_imgs/mechanations-image.jpg",
                description: `
                    In Mechanations, players must combine strategy, precision, and quick reflexes to survive. 
                    Place gears strategically to power turrets and fend off powerful bosses that bring unique 
                    mechanics and unpredictable attacks. But brute force won\’t carry you; as enemies unleash 
                    barrages of firepower, you\’ll need to dodge, weave, and stay one step ahead. Developed 
                    for the Boss Rush Game Jam 2025 under the theme "Spin," I handled every aspect of the game, 
                    from coding and visual design to composing the soundtrack.
                `,
                link: "https://github.com/isaacpost/labops-inventory",
                linkName: "Private GitHub"
            },

            {
                title: "Otterview Sentiment Analysis",
                origin: "Rochester Institute of Technology - Engineering Cloud Software Systems",
                imageLink: "/assets/project_imgs/otterview_image.jpg",
                description: `
                    Otterview is a team-of-4-built sentiment analysis program that processes 
                    reception to popular events on social media platforms. Every comment 
                    related to a user-specified event is given a sentiment score, tallied to determine 
                    if the event was a success or not, and then given a letter score. 
                    The service was cloud-hosted in AWS and set up through CloudFormation. My 
                    main tasks on the project were assisting with the design the system architecture 
                    and programming the user interface which was developed in React 
                    and hosted on AWS Amplify. While the service is no longer being developed, you 
                    can view the codebase at the link below.
                `,
                link: "https://github.com/swen-514-614-spr-2023-2/team-3",
                linkName: "GitHub"
            },

            {
                title: "Personal Website",
                origin: "Personal Project",
                imageLink: "/assets/project_imgs/personal_website_image.jpg",
                description: `
                    This project is aimed at showcasing 
                    my personal expertise in front-end web development 
                    while providing an interactive way to view my portfolio. 
                    It is built using the Angular framework and is 
                    currently being run on a Hostinger server.
                `,
                link: "https://github.com/isaacpost/ijp-website",
                linkName: "GitHub"
            }
        ]
    }

    goToLink(url: string){
        window.open(url, "_blank");
    }
}
