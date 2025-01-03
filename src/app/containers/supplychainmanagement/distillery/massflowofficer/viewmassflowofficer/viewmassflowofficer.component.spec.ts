import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmassflowofficerComponent } from './viewmassflowofficer.component';

describe('ViewmassflowofficerComponent', () => {
  let component: ViewmassflowofficerComponent;
  let fixture: ComponentFixture<ViewmassflowofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmassflowofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmassflowofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
