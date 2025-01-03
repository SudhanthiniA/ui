import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B11formComponent } from './b11form.component';

describe('B11formComponent', () => {
  let component: B11formComponent;
  let fixture: ComponentFixture<B11formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B11formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B11formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
