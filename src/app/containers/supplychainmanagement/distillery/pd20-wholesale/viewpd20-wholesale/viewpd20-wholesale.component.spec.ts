import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd20WholesaleComponent } from './viewpd20-wholesale.component';

describe('Viewpd20WholesaleComponent', () => {
  let component: Viewpd20WholesaleComponent;
  let fixture: ComponentFixture<Viewpd20WholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd20WholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd20WholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
