import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from 'src/app/services/data.model';
import { ProjectTimelineService } from 'src/app/services/project-timeline.service';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements AfterViewInit {
  project!: Project;
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider!: KeenSliderInstance;
  images: String[] = ["assets/images/lms2.jpg", "assets/images/lms1.jpg", "assets/images/lms4.jpg"]
  opacities: number[] = [];
  onItemChange(event: any) {
    // Handle item change logic here
    console.log('Item changed:', event);
  }
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoHeight:true,
    autoWidth: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  
  constructor(
    private _ptService: ProjectTimelineService,
    private cdr: ChangeDetectorRef
  ) {
    this._ptService.selectedProject$.subscribe((id) => {
      if (id !== null) {
        console.log(id)
        this.getProject(id)
        this.cdr.detectChanges();
      }
    });
  }

  responsiveOptions: any[] | undefined;

  ngAfterViewInit(): void {
    if (this.sliderRef) {
      this.initializeSlider();
    }

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 3,
          numScroll: 1
      }
  ];
  }

  getProject(id: number){
    this._ptService.getProjectById(id).subscribe((result) => {
      this.project = result
      console.log(this.project);
    });
  }

  initializeSlider() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slides: this.images.length,
        loop: true,
        mode: 'free',
        defaultAnimation: {
          duration: 800,
          easing: (time: number) => {
            return time;
          },
        },
        detailsChanged: (s) => {
          this.opacities = s.track.details.slides.map((slide) => slide.portion);
        },
      });
      setInterval(() => {
        this.slider.next();
      }, 5000);
    });
  }
}
