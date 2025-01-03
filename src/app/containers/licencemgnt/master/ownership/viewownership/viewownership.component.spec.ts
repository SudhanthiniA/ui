import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewownershipComponent } from './viewownership.component';

describe('ViewownershipComponent', () => {
  let component: ViewownershipComponent;
  let fixture: ComponentFixture<ViewownershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewownershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewownershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
