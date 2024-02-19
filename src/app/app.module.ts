import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { FreelanceComponent } from './component/freelance/freelance.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { SkillsComponent } from './component/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    FreelanceComponent,
    HomeComponent,
    NotfoundComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
