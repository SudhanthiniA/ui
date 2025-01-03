import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinappticketComponent } from './viewinappticket.component';

describe('ViewinappticketComponent', () => {
  let component: ViewinappticketComponent;
  let fixture: ComponentFixture<ViewinappticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinappticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinappticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
