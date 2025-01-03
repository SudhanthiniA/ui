import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexpirytypeComponent } from './viewexpirytype.component';

describe('ViewexpirytypeComponent', () => {
  let component: ViewexpirytypeComponent;
  let fixture: ComponentFixture<ViewexpirytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexpirytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexpirytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
