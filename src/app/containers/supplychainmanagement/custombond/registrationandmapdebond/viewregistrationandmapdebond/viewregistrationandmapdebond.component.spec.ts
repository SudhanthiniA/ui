import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregistrationandmapdebondComponent } from './viewregistrationandmapdebond.component';

describe('ViewregistrationandmapdebondComponent', () => {
  let component: ViewregistrationandmapdebondComponent;
  let fixture: ComponentFixture<ViewregistrationandmapdebondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregistrationandmapdebondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregistrationandmapdebondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
