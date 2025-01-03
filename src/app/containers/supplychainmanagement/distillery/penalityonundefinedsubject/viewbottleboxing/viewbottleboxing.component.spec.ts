import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottleboxingComponent } from './viewbottleboxing.component';

describe('ViewbottleboxingComponent', () => {
  let component: ViewbottleboxingComponent;
  let fixture: ComponentFixture<ViewbottleboxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottleboxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottleboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
