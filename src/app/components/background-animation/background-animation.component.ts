import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.scss']
})
export class BackgroundAnimationComponent implements OnInit, OnChanges {
  @Input() theme: string = '';
  routerName!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.routerName = this.router.url.substring(1);
        console.log(this.routerName); 
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme']) {
      console.log('Received theme:', this.theme);
      this.updateBodyTheme();
    }
  }

  private updateBodyTheme(): void {
    document.body.classList.toggle('dark-theme', this.theme === 'dark');
  }
}
