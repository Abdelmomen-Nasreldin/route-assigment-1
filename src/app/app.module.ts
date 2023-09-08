import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PorfolioComponent } from './Components/porfolio/porfolio.component';
import { MainComponent } from './Components/main/main.component';
import { PorfolioCardComponent } from './Components/porfolio-card/porfolio-card.component';

import { NgIconsModule } from '@ng-icons/core';
import {bootstrapFacebook, bootstrapGlobe, bootstrapLinkedin, bootstrapTwitter} from '@ng-icons/bootstrap-icons'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PorfolioComponent,
    MainComponent,
    PorfolioCardComponent
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
