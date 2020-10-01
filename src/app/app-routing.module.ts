import { SocialMediaComponent } from './social-media/social-media.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact-us", component: ContactPageComponent}, 
  {path: "social-media", component: SocialMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
