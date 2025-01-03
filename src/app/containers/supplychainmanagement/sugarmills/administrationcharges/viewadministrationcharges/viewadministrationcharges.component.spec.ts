import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadministrationchargesComponent } from './viewadministrationcharges.component';

describe('ViewadministrationchargesComponent', () => {
  let component: ViewadministrationchargesComponent;
  let fixture: ComponentFixture<ViewadministrationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadministrationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadministrationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
