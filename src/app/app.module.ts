import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBtnComponent } from './menu-btn/menu-btn.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DividerLineComponent } from './diveder-line/divider-line.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';
import { HireMeBtnComponent } from './hire-me-btn/hire-me-btn.component';
import { AboutMeCardComponent } from './about-me-card/about-me-card.component';
import { AboutMeSkillsComponent } from './about-me-skills/about-me-skills.component';
import { AboutMeStudiesComponent } from './about-me-studies/about-me-studies.component';
import { RoundedImageComponent } from './rounded-image/rounded-image.component';
import { ContactComponent } from './contact/contact.component';
import { IconsListComponent } from './icons-list/icons-list.component';
import {SocialNetworksComponent} from "./social-networks/social-networks.component";
import { BackIconComponent } from './back-icon/back-icon.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WorksComponent } from './works/works.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { WorkSkillsComponent } from './work-skills/work-skills.component';
import { TypingTextComponent } from './typing-text/typing-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    ExplorerComponent,
    BodyComponent,
    HomeComponent,
    MenuComponent,
    MenuBtnComponent,
    AboutMeComponent,
    DividerLineComponent,
    ProfileNameComponent,
    HireMeBtnComponent,
    SocialNetworksComponent,
    AboutMeCardComponent,
    AboutMeSkillsComponent,
    AboutMeStudiesComponent,
    RoundedImageComponent,
    ContactComponent,
    IconsListComponent,
    BackIconComponent,
    WorksComponent,
    ProfileImageComponent,
    WorkSkillsComponent,
    TypingTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
