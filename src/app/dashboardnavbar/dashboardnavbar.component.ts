import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardnavbar',
  templateUrl: './dashboardnavbar.component.html',
  styleUrls: ['./dashboardnavbar.component.scss']
})
export class DashboardnavbarComponent implements OnInit {

  constructor(private router : Router) { }

  createpatient() {
    this.router.navigate(['/createpatient']);
   }
   showpatient() {
     this.router.navigate(['/showpatient']);
   }

  ngOnInit() {
  }

}
