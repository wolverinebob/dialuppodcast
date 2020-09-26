import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { SubBtnComponent } from './sub-btn/sub-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertButtonComponent,
    NavbarComponent,
    ContactPageComponent,
    HomeComponent,
    EpisodesComponent,
    AboutComponent,
    ShopComponent,
    BlogComponent,
    FooterComponent,
    SubBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
