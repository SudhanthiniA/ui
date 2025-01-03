import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantransportationpassComponent } from './cantransportationpass.component';

describe('CantransportationpassComponent', () => {
  let component: CantransportationpassComponent;
  let fixture: ComponentFixture<CantransportationpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantransportationpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantransportationpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
