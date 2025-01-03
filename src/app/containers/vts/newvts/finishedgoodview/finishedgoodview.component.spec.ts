import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedgoodviewComponent } from './finishedgoodview.component';

describe('FinishedgoodviewComponent', () => {
  let component: FinishedgoodviewComponent;
  let fixture: ComponentFixture<FinishedgoodviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedgoodviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedgoodviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
