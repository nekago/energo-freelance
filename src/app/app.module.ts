import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ServicesComponent } from './components/services/services.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MenuComponent } from './components/header/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    AboutUsComponent,
    LicensesComponent,
    PartnersComponent,
    ReviewsComponent,
    ServicesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
