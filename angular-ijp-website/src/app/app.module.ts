import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { CarouselModule } from '@coreui/angular';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'music', component: MusicComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    MusicComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    CarouselModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})

export class AppModule { }
