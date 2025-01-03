import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationchargesComponent } from './administrationcharges.component';

describe('AdministrationchargesComponent', () => {
  let component: AdministrationchargesComponent;
  let fixture: ComponentFixture<AdministrationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
