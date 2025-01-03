import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B10formComponent } from './b10form.component';

describe('B10formComponent', () => {
  let component: B10formComponent;
  let fixture: ComponentFixture<B10formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B10formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B10formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
