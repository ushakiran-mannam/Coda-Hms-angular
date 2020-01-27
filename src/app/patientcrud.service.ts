import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientcrudService {
  
  private url ="http://localhost:8080/patients/" ;

  constructor( private Http : HttpClient) {      
  }
  createPatient(patient) : Observable<any> {
    let observable = this.Http.post(this.url +'create',patient);
    return observable;
  }
  showPatient() : Observable<any> {
    let observable = this.Http.get(this.url+'all');
    return observable;
  }
  deletePatient(deletepatient) : Observable<any> {
    
    let observable = this.Http.put(this.url+'delete',deletepatient);
    return observable;
  }

  
}
