import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexesearchticketComponent } from './viewexesearchticket.component';

describe('ViewexesearchticketComponent', () => {
  let component: ViewexesearchticketComponent;
  let fixture: ComponentFixture<ViewexesearchticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexesearchticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexesearchticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
