import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B3formComponent } from './b3form.component';

describe('B3formComponent', () => {
  let component: B3formComponent;
  let fixture: ComponentFixture<B3formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B3formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B3formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
