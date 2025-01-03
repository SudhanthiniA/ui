import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusrptlicregComponent } from './statusrptlicreg.component';

describe('StatusrptlicregComponent', () => {
  let component: StatusrptlicregComponent;
  let fixture: ComponentFixture<StatusrptlicregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusrptlicregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusrptlicregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
