import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf10MolassesentryComponent } from './mf10-molassesentry.component';

describe('Mf10MolassesentryComponent', () => {
  let component: Mf10MolassesentryComponent;
  let fixture: ComponentFixture<Mf10MolassesentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf10MolassesentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf10MolassesentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
