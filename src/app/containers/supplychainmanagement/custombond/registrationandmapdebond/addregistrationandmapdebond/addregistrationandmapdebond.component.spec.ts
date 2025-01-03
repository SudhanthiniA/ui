import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregistrationandmapdebondComponent } from './addregistrationandmapdebond.component';

describe('AddregistrationandmapdebondComponent', () => {
  let component: AddregistrationandmapdebondComponent;
  let fixture: ComponentFixture<AddregistrationandmapdebondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregistrationandmapdebondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregistrationandmapdebondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
