import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd20WholesaleComponent } from './pd20-wholesale.component';

describe('Pd20WholesaleComponent', () => {
  let component: Pd20WholesaleComponent;
  let fixture: ComponentFixture<Pd20WholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd20WholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd20WholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
