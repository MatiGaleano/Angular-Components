import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {animation: 'dashboard'}},
  {path: 'dashboard', component: DashboardComponent, data: {animation: 'dashboard'}},
  {path: 'about', component: AboutMeComponent, data: {animation: 'about'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
  {path: 'blog', component: BlogComponent, data: {animation: 'blog'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
