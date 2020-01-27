import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarloginService {
  public username:String;
  constructor() { }
  setUser(val : String)
  {
    this.username = val;
  }
  getUser()
  {
    console.log(this.username);
    return this.username;
  }
}
