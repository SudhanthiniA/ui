import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingplanComponent } from './viewbottlingplan.component';

describe('ViewbottlingplanComponent', () => {
  let component: ViewbottlingplanComponent;
  let fixture: ComponentFixture<ViewbottlingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
