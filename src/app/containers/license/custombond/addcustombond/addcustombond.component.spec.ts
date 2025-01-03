import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustombondComponent } from './addcustombond.component';

describe('AddcustombondComponent', () => {
  let component: AddcustombondComponent;
  let fixture: ComponentFixture<AddcustombondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustombondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustombondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
