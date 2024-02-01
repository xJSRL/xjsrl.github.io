import { Component, ViewChild, HostListener, inject, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { ProjectTimelineService } from './services/project-timeline.service';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('projectDrawer') projectDrawer!: MatDrawer;

  private breakpointObserver = inject(BreakpointObserver);

  mode = 'Dark';
  backgroundHeight = '100vh';

  ngAfterViewInit(): void {
    this.addFadeInAnimation();
  }

  constructor(private _ptService: ProjectTimelineService, private contexts: ChildrenOutletContexts) {
    this._ptService.selectedProject$.subscribe((id) => {
      if (id !== null) {
        this.projectDrawer.open();
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    this.mode = this.mode === 'Light' ? 'Dark' : 'Light';
  }

  private addFadeInAnimation() {
    const contentElement = document.querySelector('.fade-in');
    if (contentElement) {
      contentElement.classList.add('fade-in');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const newHeight = 100 + (scrolled / scrollHeight) * 100;
    this.backgroundHeight = `${newHeight}vh`;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
