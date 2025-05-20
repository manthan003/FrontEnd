import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },  // default route
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
