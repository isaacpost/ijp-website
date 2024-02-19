import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'music', component: MusicComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
