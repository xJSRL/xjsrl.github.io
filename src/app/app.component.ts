import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewChecked, Component, HostListener, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    this.addFadeInAnimation();
  }

  @ViewChild('drawer') drawer!: MatDrawer; 
  private breakpointObserver = inject(BreakpointObserver);

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
