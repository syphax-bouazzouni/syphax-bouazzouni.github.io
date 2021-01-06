import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactComponent} from "./contact/contact.component";
import {WorksComponent} from "./works/works.component";

const routes: Routes = [
  { path: '', component: HomeComponent,data:{animation:'home'} },
  { path: 'menu', component: MenuComponent,data:{animation: 'menu'}},
  {path:'about',component:AboutMeComponent ,data:{animation: "about"}},
  {path:'contact',component:ContactComponent,data:{animation: 'contact'}},
  {path:'works',component:WorksComponent,data:{animation:'works'}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
