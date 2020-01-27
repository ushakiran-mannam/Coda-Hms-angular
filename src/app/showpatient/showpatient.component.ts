import { Component, OnInit } from '@angular/core';
import { PatientcrudService } from '../patientcrud.service';
import { Deletepatient } from '../deletepatient';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',
  styleUrls: ['./showpatient.component.scss']
})
export class ShowpatientComponent implements OnInit {

  public patient : any ;
  public patientdata = false;
  public isdeleted = false ;
  private deletepatient : Deletepatient = new Deletepatient(null); 
  constructor(private patientService : PatientcrudService) { }

  showPatient() {
   
    let observable = this.patientService.showPatient();
    observable.subscribe((response)=>{
      if(response.status == 200)
      { console.log(response);
        this.patientdata = true;
        this.patient=response;
      }
    }
    )
   
  }
  deleteUser(userId) {
   this.deletepatient.userId = userId ;
   let observable = this.patientService.deletePatient(this.deletepatient);
   observable.subscribe((response)=>{
    if(response.status == 200)
    { console.log(response);
      this.isdeleted = true;
    }
  }
  )
  

  }
  navigateEdit(userid) {

  }

  ngOnInit() {
  }


}
