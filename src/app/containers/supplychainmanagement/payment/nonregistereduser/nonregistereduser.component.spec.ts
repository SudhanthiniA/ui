import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonregistereduserComponent } from './nonregistereduser.component';

describe('NonregistereduserComponent', () => {
  let component: NonregistereduserComponent;
  let fixture: ComponentFixture<NonregistereduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonregistereduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonregistereduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
