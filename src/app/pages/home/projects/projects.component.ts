import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/services/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit() {
        this.loadProjects();
    }

    private loadProjects() {
        this.projectService.getProjects().subscribe((projects) => {
            this.projects = projects;
            this.addCustomProjectInformation();
        });
    }

    private addCustomProjectInformation() {
        this.projects.forEach((project) => {
            project.customProjectInformation = {
                image: 'assets/project-images/no-image.png',
            };

            if (project.name == 'NuTracker') {
                project.customProjectInformation = {
                    image: 'assets/project-images/nutracker.png',
                };
            }

            if (project.name == 'memeageboard') {
                project.customProjectInformation = {
                    image: 'assets/project-images/memeageboard.png',
                };
            }
        });
    }
}
