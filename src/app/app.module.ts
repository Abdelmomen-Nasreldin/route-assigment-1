import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { MainComponent } from './Components/main/main.component';
import { PortfolioCardComponent } from './Components/portfolio-card/portfolio-card.component';

import { NgIconsModule } from '@ng-icons/core';
import {bootstrapFacebook, bootstrapGlobe, bootstrapLinkedin, bootstrapTwitter} from '@ng-icons/bootstrap-icons';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    MainComponent,
    PortfolioCardComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapFacebook, bootstrapGlobe, bootstrapLinkedin, bootstrapTwitter }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
