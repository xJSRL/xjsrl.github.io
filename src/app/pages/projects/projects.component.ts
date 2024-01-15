import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from 'src/app/services/data.model';
import { ProjectTimelineService } from 'src/app/services/project-timeline.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private _ptService: ProjectTimelineService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._ptService.getProjects().subscribe((result) => {
      this.projects = result.sort((a, b) => b.id - a.id);
      this.cdr.detectChanges();
    });
  }

}
