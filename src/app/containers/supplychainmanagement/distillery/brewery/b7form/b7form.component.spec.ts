import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B7formComponent } from './b7form.component';

describe('b7formComponent', () => {
  let component: B7formComponent;
  let fixture: ComponentFixture<B7formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B7formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B7formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
