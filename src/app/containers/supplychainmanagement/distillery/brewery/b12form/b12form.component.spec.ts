import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B12formComponent } from './b12form.component';

describe('B12formComponent', () => {
  let component: B12formComponent;
  let fixture: ComponentFixture<B12formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B12formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B12formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
