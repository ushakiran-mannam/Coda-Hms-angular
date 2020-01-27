import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecorousalComponent } from './homecorousal.component';

describe('HomecorousalComponent', () => {
  let component: HomecorousalComponent;
  let fixture: ComponentFixture<HomecorousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecorousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecorousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
