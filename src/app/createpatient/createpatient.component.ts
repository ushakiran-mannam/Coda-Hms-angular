import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientcrudService } from '../patientcrud.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.scss']
})
export class CreatepatientComponent implements OnInit {
  private patient : Patient =new Patient("","","",null,"","","");
  public inserted = false;
  public show = false;

  
  constructor(private patientService : PatientcrudService ) { }


  createPatient() {
   
    let observable = this.patientService.createPatient(this.patient);
    observable.subscribe((response)=>{
      if(response.status == 200)
      {
        this.inserted=true;
        this.patient=response.data;
      }
    }
    )
   
  }
  displayPatient() {
      this.show = true;
  }

  ngOnInit() {
    //  this.patient  = new Patient("","","",null,"","","");
  }

}
