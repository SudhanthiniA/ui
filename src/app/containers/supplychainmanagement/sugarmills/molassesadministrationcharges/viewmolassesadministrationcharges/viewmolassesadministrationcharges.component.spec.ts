import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmolassesadministrationchargesComponent } from './viewmolassesadministrationcharges.component';

describe('ViewmolassesadministrationchargesComponent', () => {
  let component: ViewmolassesadministrationchargesComponent;
  let fixture: ComponentFixture<ViewmolassesadministrationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmolassesadministrationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmolassesadministrationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
