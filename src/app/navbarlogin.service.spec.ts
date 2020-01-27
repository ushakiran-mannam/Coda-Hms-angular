import { TestBed } from '@angular/core/testing';

import { NavbarloginService } from './navbarlogin.service';

describe('NavbarloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarloginService = TestBed.get(NavbarloginService);
    expect(service).toBeTruthy();
  });
});
