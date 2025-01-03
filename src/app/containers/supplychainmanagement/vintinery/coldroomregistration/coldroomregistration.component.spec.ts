import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdroomregistrationComponent } from './coldroomregistration.component';

describe('ColdroomregistrationComponent', () => {
  let component: ColdroomregistrationComponent;
  let fixture: ComponentFixture<ColdroomregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdroomregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdroomregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
