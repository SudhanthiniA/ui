import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExesearchticketComponent } from './exesearchticket.component';

describe('ExesearchticketComponent', () => {
  let component: ExesearchticketComponent;
  let fixture: ComponentFixture<ExesearchticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExesearchticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExesearchticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
