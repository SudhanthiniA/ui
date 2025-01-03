import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingplanpredeclerationComponent } from './viewbottlingplanpredecleration.component';

describe('ViewbottlingplanpredeclerationComponent', () => {
  let component: ViewbottlingplanpredeclerationComponent;
  let fixture: ComponentFixture<ViewbottlingplanpredeclerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingplanpredeclerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingplanpredeclerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
