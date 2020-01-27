import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavbarloginService } from '../navbarlogin.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  public user : String;

  constructor(private router: Router,private loginservice : NavbarloginService) { }

  btnClick= function () {

    this.loginservice.setUser(this.user);
    console.log(this.user);
    this.router.navigate(['/home']);
  };

  

  ngOnInit() {
    this.user = "";   
    this.loginservice.setUser(this.user);
  }

}
