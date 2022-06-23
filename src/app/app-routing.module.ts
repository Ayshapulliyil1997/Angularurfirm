import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ViewslideComponent} from './viewslide/viewslide.component';
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
import{ NewsComponent} from './news/news.component';
import{ServicerouteComponent } from './serviceroute/serviceroute.component';
import {TeamrouteComponent} from './teamroute/teamroute.component';



export const routes: Routes = [
  {path:'news' , component: NewsComponent},
  {path:'serroute', component:ServicerouteComponent },
  {path:'teamroute' , component: TeamrouteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
