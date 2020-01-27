import { Component, OnInit } from '@angular/core';
import { NavbarloginService } from '../navbarlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username : String ;

  constructor( private loginservice : NavbarloginService , private router : Router ) {
 
   }

  ngOnInit() {
    
    this.username = this.loginservice.getUser();
    console.log(this.username);
  }

}
