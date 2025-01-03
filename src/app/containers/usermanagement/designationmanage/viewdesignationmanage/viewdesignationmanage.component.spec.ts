import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdesignationmanageComponent } from './viewdesignationmanage.component';

describe('ViewdesignationmanageComponent', () => {
  let component: ViewdesignationmanageComponent;
  let fixture: ComponentFixture<ViewdesignationmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdesignationmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdesignationmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
