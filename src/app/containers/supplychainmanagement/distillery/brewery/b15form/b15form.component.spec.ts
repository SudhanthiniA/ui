import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B15formComponent } from './b15form.component';

describe('B15formComponent', () => {
  let component: B15formComponent;
  let fixture: ComponentFixture<B15formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B15formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B15formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
