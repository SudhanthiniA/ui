import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorizedBwflPersonComponent } from './view-authorized-bwfl-person.component';

describe('ViewAuthorizedBwflPersonComponent', () => {
  let component: ViewAuthorizedBwflPersonComponent;
  let fixture: ComponentFixture<ViewAuthorizedBwflPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAuthorizedBwflPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorizedBwflPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
