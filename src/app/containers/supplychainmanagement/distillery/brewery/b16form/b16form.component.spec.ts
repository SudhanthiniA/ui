import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B16formComponent } from './b16form.component';

describe('B16formComponent', () => {
  let component: B16formComponent;
  let fixture: ComponentFixture<B16formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B16formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B16formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
