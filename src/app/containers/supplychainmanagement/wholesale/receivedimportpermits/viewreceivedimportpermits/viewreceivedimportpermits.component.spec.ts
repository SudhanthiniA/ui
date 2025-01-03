import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceivedimportpermitsComponent } from './viewreceivedimportpermits.component';

describe('ViewreceivedimportpermitsComponent', () => {
  let component: ViewreceivedimportpermitsComponent;
  let fixture: ComponentFixture<ViewreceivedimportpermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreceivedimportpermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreceivedimportpermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
