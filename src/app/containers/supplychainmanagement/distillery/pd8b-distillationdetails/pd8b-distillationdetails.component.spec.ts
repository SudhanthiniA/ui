import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd8bDistillationdetailsComponent } from './pd8b-distillationdetails.component';

describe('Pd8bDistillationdetailsComponent', () => {
  let component: Pd8bDistillationdetailsComponent;
  let fixture: ComponentFixture<Pd8bDistillationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd8bDistillationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd8bDistillationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
