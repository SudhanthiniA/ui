import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClflhighlowliftingComponent } from './clflhighlowlifting.component';

describe('ClflhighlowliftingComponent', () => {
  let component: ClflhighlowliftingComponent;
  let fixture: ComponentFixture<ClflhighlowliftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClflhighlowliftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClflhighlowliftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
