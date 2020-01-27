import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { ShowpatientComponent } from './showpatient/showpatient.component';


const routes: Routes = [
  {path : '' , component : LoginformComponent },
  {path : 'home' , component : HomepageComponent},
  {path : 'createpatient' , component : CreatepatientComponent},
  {path : 'showpatient' , component : ShowpatientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
