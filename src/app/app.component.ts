import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewChecked, Component, HostListener, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { ProjectTimelineService } from './services/project-timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild('drawer') drawer!: MatDrawer; 
  @ViewChild('projectDrawer') projectDrawer!: MatDrawer; 
  private breakpointObserver = inject(BreakpointObserver);
  
  ngAfterViewChecked(): void {
    this.addFadeInAnimation();
  }

  constructor(private _ptService: ProjectTimelineService){
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
   toogleDarkTheme(){
    document.body.classList.toggle('dark-theme');
   }

   private addFadeInAnimation() {
    const contentElement = document.querySelector('.fade-in');
    if (contentElement) {
      contentElement.classList.add('fade-in');
    }
  }

  backgroundHeight = '100vh';

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const newHeight = 100 + (scrolled / scrollHeight) * 100;
    this.backgroundHeight = `${newHeight}vh`;
  }
}
