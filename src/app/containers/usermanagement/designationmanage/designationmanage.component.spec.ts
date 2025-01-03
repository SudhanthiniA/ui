import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationmanageComponent } from './designationmanage.component';

describe('DesignationmanageComponent', () => {
  let component: DesignationmanageComponent;
  let fixture: ComponentFixture<DesignationmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
