import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarloginService } from './navbarlogin.service';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { PatientcrudService } from './patientcrud.service';
import {  HttpClientModule } from '@angular/common/http';
import { Patient } from './patient';
import { DashboardnavbarComponent } from './dashboardnavbar/dashboardnavbar.component';
import { HomecorousalComponent } from './homecorousal/homecorousal.component';
import { ShowpatientComponent } from './showpatient/showpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    HomepageComponent,
    CreatepatientComponent,
    DashboardnavbarComponent,
    HomecorousalComponent,
    ShowpatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [ NavbarloginService , PatientcrudService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
