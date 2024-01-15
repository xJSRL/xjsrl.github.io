import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectTimelineService {

  constructor(
  ) { }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        projectName: "Inventory Management",
        shortDescription: "Simple inventory mangement",
        description: "Python course final school project.",
        preview: "assets/images/lms3_preview.jpg",
        images: ["assets/images/lms3_preview.jpg", "assets/images/lms2.jpg", "assets/images/lms4.jpg"],
        techUsed: ["Python", "PyQt5"],
        date: "2020",
        websiteLink: "",
      },
      {
        id: 2,
        projectName: "2nd",
        shortDescription: "Lms for ajdf",
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
      {
        id: 4,
        projectName: "LMS2",
        shortDescription: "Lms for ajdf",
        description: "A Learning Management System for managing courses and students.",
        preview: "assets/images/lms2.jpg",
        images: ["assets/images/lms2.jpg", "assets/images/lms5.jpg"],
        techUsed: ["Java", "Java Swing"],
        date: "December 2020",
        websiteLink: "None",
      },
      {
        id: 5,
        projectName: "last",
        shortDescription: "Lms for ajdf",
        description: "A Learning Management System for managing courses and students.",
        preview: "assets/images/lms2.jpg",
        images: ["assets/images/lms2.jpg", "assets/images/lms5.jpg"],
        techUsed: ["Java", "Java Swing"],
        date: "December 2020",
        websiteLink: "None",
      },
    ]

    return of(projects);
  }
}
