import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd18imflexportComponent } from './pd18imflexport.component';

describe('Pd18imflexportComponent', () => {
  let component: Pd18imflexportComponent;
  let fixture: ComponentFixture<Pd18imflexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd18imflexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd18imflexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
