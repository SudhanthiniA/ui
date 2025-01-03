import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewposdamageComponent } from './viewposdamage.component';

describe('ViewposdamageComponent', () => {
  let component: ViewposdamageComponent;
  let fixture: ComponentFixture<ViewposdamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewposdamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewposdamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
