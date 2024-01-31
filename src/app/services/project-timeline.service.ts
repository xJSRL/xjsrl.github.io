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
        shortDescription: "A Python-based school project implementing a simple inventory management system",
        description: "This school project revolves around the creation of a straightforward inventory management system using Python. The system allows users to track and manage items within a predefined inventory, featuring functionalities such as adding new items, updating quantities, and deleting items. The project emphasizes fundamental programming concepts and provides an insightful hands-on experience in developing practical applications.",
        preview: "assets/images/no_image_available.png",
        images: [],
        techUsed: ["Python", "Tkinter"],
        date: "2020",
        websiteLink: "https://material.angular.io/components/sidenav/overview",
      },
      {
        id: 2,
        projectName: "Library Management System",
        shortDescription: "A Java-based school project showcasing a comprehensive Library Management System.",
        description: "Developed a sophisticated Library Management System using Java. This system offers features such as book cataloging, borrowing and returning functionality, and efficient search capabilities. The project also demonstrates my practical understanding of database integration for storing and managing library resources. Through this journey, I've gained valuable experience in designing interfaces and implementing data structures.",
        preview: "assets/images/lms/lms3_preview.jpg",
        images: ["assets/images/lms/lms1.jpg", "assets/images/lms/lms2.jpg", "assets/images/lms/lms3_preview.jpg", "assets/images/lms/lms4.jpg", "assets/images/lms/lms5.jpg", "assets/images/lms/lms6.jpg", "assets/images/lms/lms7.jpg"],
        techUsed: ["Java", "Java Swing"],
        date: "December 2020",
        websiteLink: "None",
      },
      {
        id: 4,
        projectName: "Mabini Water Billing System",
        shortDescription: "A PHP-based web application empowering admins to manage water billing records, receipts, users, and more",
        description: "Designed for efficient water billing management, placing control in the hands of administrators. With a user-friendly interface, administrators can seamlessly handle billing records, generate receipts, and oversee the entire billing process. ",
        preview: "assets/images/mwd-web/mwd2.png",
        images: ["assets/images/mwd-web/mwd1.png", "assets/images/mwd-web/mwd2.png", "assets/images/mwd-web/mwd3.png", "assets/images/mwd-web/mwd4.png", "assets/images/mwd-web/mwd5.png"],
        techUsed: ["PHP", "MySQL"],
        date: "December 2020",
        websiteLink: "None",
      },
      {
        id: 3,
        projectName: "Mabini E-Pay App",
        shortDescription: "An Android water payment app developed with Ionic-Angular.",
        description: "Crafted using Ionic Angular specifically designed for Android platforms. This application is developed alongside with Mabini Water Billing System and it streamlines the water payment process by providing users with a user-friendly interface to manage their water bills efficiently. ",
        preview: "assets/images/mwd-app/1.png",
        images: ["assets/images/mwd-app/1.png", "assets/images/mwd-app/2.png", "assets/images/mwd-app/3.png", "assets/images/mwd-app/4.png", "assets/images/mwd-app/5.png", "assets/images/mwd-app/6.png", "assets/images/mwd-app/7.png", "assets/images/mwd-app/8.png"],
        techUsed: ["Ionic", "Angular", "RestAPI"],
        date: "December 2020",
        websiteLink: "None",
      },
      {
        id: 5,
        projectName: "Agripet",
        shortDescription: "A project that enabling pet owners to monitor vaccination status and allowing farmers to request plants.",
        description: "This system serves dual purposes for both pet owners and farmers. For pet owners, the system provides a user-friendly interface to monitor and track the vaccination status of their pets, ensuring they stay up-to-date with necessary immunizations. Simultaneously, Agripet facilitates farmers by offering a platform to request plants, streamlining the process of acquiring essential agricultural resources.",
        preview: "assets/images/apc/apc1.png",
        images: ["assets/images/apc/apc1.png", "assets/images/apc/apc2.png", "assets/images/apc/apc3.png", "assets/images/apc/apc4.png", "assets/images/apc/apc5.png" ],
        techUsed: ["Angular", "Express Framework", "PostgreSQL", "AWS"],
        date: "December 2020",
        websiteLink: "None",
      },
      {
        id: 6,
        projectName: "Dental Appointment System",
        shortDescription: "A web app developed for efficient management of dental appointments.",
        description: "A system that offers patients a user-friendly interface to schedule, reschedule, or cancel appointments, leave reviews, while dental professionals can efficiently organize their schedules and access patient information. ",
        preview: "assets/images/das/das1.png",
        images: ["assets/images/das/das1.png", "assets/images/das/das2.png", "assets/images/das/das3.png", "assets/images/das/das4.png", "assets/images/das/das5.png", "assets/images/das/das6.png", "assets/images/das/das7.png", "assets/images/das/das8.png", "assets/images/das/das9.png", "assets/images/das/das10.png", ],
        techUsed: ["Angular", "Express Framework", "PostgreSQL", "AWS"],
        date: "December 2020",
        websiteLink: "https://drrowenahernandez-clinic.tech/",
      },
      
    ]

    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project> {
    const project = this.projects.find((p) => p.id === id);
    return of(project!);
  }
  
}
