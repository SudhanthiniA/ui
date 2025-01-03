import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd20WholesaleComponent } from './addpd20-wholesale.component';

describe('Addpd20WholesaleComponent', () => {
  let component: Addpd20WholesaleComponent;
  let fixture: ComponentFixture<Addpd20WholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd20WholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd20WholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
