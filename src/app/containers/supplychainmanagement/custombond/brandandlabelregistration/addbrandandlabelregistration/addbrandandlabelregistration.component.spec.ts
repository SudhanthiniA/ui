import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandandlabelregistrationComponent } from './addbrandandlabelregistration.component';

describe('AddbrandandlabelregistrationComponent', () => {
  let component: AddbrandandlabelregistrationComponent;
  let fixture: ComponentFixture<AddbrandandlabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandandlabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandandlabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
