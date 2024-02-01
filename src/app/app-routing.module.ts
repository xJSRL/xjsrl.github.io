import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Jamaica Sorrel',
    data: { animation: '' }
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Me | Jamaica Sorrel',
    data: {  animation: 'about' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'My Projects',
    data: { animation: 'projects' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Me',
    data: { animation: 'contact' }
  },
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
