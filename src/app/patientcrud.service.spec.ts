import { TestBed } from '@angular/core/testing';

import { PatientcrudService } from './patientcrud.service';

describe('PatientcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientcrudService = TestBed.get(PatientcrudService);
    expect(service).toBeTruthy();
  });
});
