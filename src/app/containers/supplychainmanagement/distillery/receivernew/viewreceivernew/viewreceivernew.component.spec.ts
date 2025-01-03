import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceivernewComponent } from './viewreceivernew.component';

describe('ViewreceivernewComponent', () => {
  let component: ViewreceivernewComponent;
  let fixture: ComponentFixture<ViewreceivernewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreceivernewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreceivernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
