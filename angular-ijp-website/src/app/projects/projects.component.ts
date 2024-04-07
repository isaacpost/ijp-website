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
        this.projectInfo = [
            {
                title: "Personal Website",
                origin: "My Brain",
                imageLink: "/assets/project_imgs/personal_website_image.jpg",
                description: `
                    Site-inception! This project was primarily aimed at showcasing 
                    my personal expertise in front-end web development (as well as 
                    providing an opportunity to experiment with engaging color 
                    palettes). It is built using the Angular framework and is 
                    currently being hosted on a Hostinger server.
                `,
                link: "https://github.com/isaacpost/ijp-website",
                linkName: "GitHub"
            },

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
            }
        ]
    }

    goToLink(url: string){
        window.open(url, "_blank");
    }
}
