import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InappticketComponent } from './inappticket.component';

describe('InappticketComponent', () => {
  let component: InappticketComponent;
  let fixture: ComponentFixture<InappticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InappticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InappticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
