import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforexportofmolassesComponent } from './applicationforexportofmolasses.component';

describe('ApplicationforexportofmolassesComponent', () => {
  let component: ApplicationforexportofmolassesComponent;
  let fixture: ComponentFixture<ApplicationforexportofmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforexportofmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforexportofmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
