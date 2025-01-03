import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswertypeComponent } from './answertype.component';

describe('AnswertypeComponent', () => {
  let component: AnswertypeComponent;
  let fixture: ComponentFixture<AnswertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
