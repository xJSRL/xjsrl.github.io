import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from 'src/app/services/data.model';
import { ProjectTimelineService } from 'src/app/services/project-timeline.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  project!: Project;
  responsiveOptions: any[] | undefined;

  private subscription: Subscription | undefined;

  constructor(
    private _ptService: ProjectTimelineService,
    private cdr: ChangeDetectorRef
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.subscription = this._ptService.selectedProject$.subscribe((id) => {
      if (id !== null) {
        console.log(id);
        this.getProject(id);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getProject(id: number): void {
    this._ptService.getProjectById(id).subscribe((result) => {
      this.project = result;
      console.log(this.project);
      this.cdr.detectChanges();
    });
  }
}
