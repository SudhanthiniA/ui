import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B9formComponent } from './b9form.component';

describe('B9formComponent', () => {
  let component: B9formComponent;
  let fixture: ComponentFixture<B9formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B9formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B9formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
