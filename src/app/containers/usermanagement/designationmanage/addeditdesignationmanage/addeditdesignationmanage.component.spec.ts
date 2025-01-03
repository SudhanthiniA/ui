import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdesignationmanageComponent } from './addeditdesignationmanage.component';

describe('AddeditdesignationmanageComponent', () => {
  let component: AddeditdesignationmanageComponent;
  let fixture: ComponentFixture<AddeditdesignationmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdesignationmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdesignationmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
