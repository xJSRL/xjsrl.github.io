import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Jamaica Sorrel'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Me | Jamaica Sorrel'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'My Projects'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Me'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
