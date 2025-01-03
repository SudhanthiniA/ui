import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B13formComponent } from './b13form.component';

describe('B13formComponent', () => {
  let component: B13formComponent;
  let fixture: ComponentFixture<B13formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B13formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B13formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
