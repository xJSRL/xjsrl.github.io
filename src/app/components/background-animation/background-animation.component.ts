import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.scss']
})
export class BackgroundAnimationComponent implements OnChanges {
  @Input() theme: string = '';

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
