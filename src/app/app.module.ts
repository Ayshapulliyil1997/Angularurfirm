import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewslideComponent } from './viewslide/viewslide.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CountComponent } from './count/count.component';
import { ServiceComponent } from './service/service.component';
import { CtaComponent } from './cta/cta.component';
import { MoreserviceComponent } from './moreservice/moreservice.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {CarouselComponent} from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { NewsComponent } from './news/news.component';
import { ServicerouteComponent } from './serviceroute/serviceroute.component';
import { TeamrouteComponent } from './teamroute/teamroute.component';


 

@NgModule({
  declarations: [
    AppComponent,
    ViewslideComponent,
    HeaderComponent,
    AboutComponent,
    CountComponent,
    ServiceComponent,
    CtaComponent,
    MoreserviceComponent,
    InfoboxComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    MainComponent,
    NavbarComponent,
    NewsComponent,
    ServicerouteComponent,
    TeamrouteComponent,
    MainComponent
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
