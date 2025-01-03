import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassflowofficerComponent } from './massflowofficer.component';

describe('MassflowofficerComponent', () => {
  let component: MassflowofficerComponent;
  let fixture: ComponentFixture<MassflowofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassflowofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassflowofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
