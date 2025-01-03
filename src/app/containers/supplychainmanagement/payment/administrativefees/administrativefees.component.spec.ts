import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativefeesComponent } from './administrativefees.component';

describe('AdministrativefeesComponent', () => {
  let component: AdministrativefeesComponent;
  let fixture: ComponentFixture<AdministrativefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
