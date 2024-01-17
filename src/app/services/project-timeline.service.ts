import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Project } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectTimelineService {
  private selectedProjectSubject = new BehaviorSubject<number>(0);
  selectedProject$: Observable<number> = this.selectedProjectSubject.asObservable();
  
  constructor(
  ) { }
  setSelectedProject(id: number): void {
    this.selectedProjectSubject.next(id);
  }

  projects: Project[] = [];

  getProjects(): Observable<Project[]> {
    this.projects = [
      {
        id: 1,
        projectName: "Inventory Management",
        shortDescription: "Simple inventory mangement",
        description: "Python course final school project.",
        preview: "assets/images/lms3_preview.jpg",
        images: ["assets/images/lms3_preview.jpg", "assets/images/lms2.jpg", "assets/images/lms4.jpg"],
        techUsed: ["Python", "PyQt5"],
        date: "2020",
        websiteLink: "https://material.angular.io/components/sidenav/overview",
      },
      {
        id: 2,
        projectName: "2nd",
        shortDescription: "LMS for JAVA",
        description: "A Learning Management System for managing courses and students.",
        preview: "assets/images/lms2.jpg",
        images: ["assets/images/lms2.jpg", "assets/images/lms5.jpg"],
        techUsed: ["Java", "Java Swing"],
        date: "December 2020",
        websiteLink: "None",
      },
      {
        id: 3,
        projectName: "3rd",
        shortDescription: "Lms for ajdf",
        description: "A Learning Management System for managing courses and students.",
        preview: "assets/images/lms3_preview.jpg",
        images: ["assets/images/lms3_preview.jpg", "assets/images/lms2.jpg", "assets/images/lms4.jpg"],
        techUsed: ["Java", "Java Swing"],
        date: "December 2020",
        websiteLink: "None",
      },
    ]

    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project> {
    const project = this.projects.find((p) => p.id === id);
    return of(project!);
  }
  
}
