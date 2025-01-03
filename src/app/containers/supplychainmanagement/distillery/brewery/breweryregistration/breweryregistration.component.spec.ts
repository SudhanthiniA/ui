import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryregistrationComponent } from './breweryregistration.component';

describe('BreweryregistrationComponent', () => {
  let component: BreweryregistrationComponent;
  let fixture: ComponentFixture<BreweryregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
