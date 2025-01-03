import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B8formComponent } from './b8form.component';

describe('B8formComponent', () => {
  let component: B8formComponent;
  let fixture: ComponentFixture<B8formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B8formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B8formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
