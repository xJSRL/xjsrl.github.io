import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';
import { HomeComponent } from './pages/home/home.component';
import { MediaLinksComponent } from './components/media-links/media-links.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    BackgroundAnimationComponent,
    HomeComponent,
    MediaLinksComponent,
    AboutComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
