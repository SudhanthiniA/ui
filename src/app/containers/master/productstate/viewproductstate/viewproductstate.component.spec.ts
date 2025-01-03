import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductstateComponent } from './viewproductstate.component';

describe('ViewproductstateComponent', () => {
  let component: ViewproductstateComponent;
  let fixture: ComponentFixture<ViewproductstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
