import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component"
import { HeroDetailsComponent } from "./hero-details.component";
import { DashboardComponent } from "./dashboard.component";

import { HeroesService } from "./heroes.service";

const Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'details/:id',
    component: HeroDetailsComponent 
  }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroesService ],
  exports:   [ RouterModule ]
})

export class AppModule {  }
