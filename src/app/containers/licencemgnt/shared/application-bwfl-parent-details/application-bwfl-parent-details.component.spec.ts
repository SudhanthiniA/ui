import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationBwflParentDetailsComponent } from './application-bwfl-parent-details.component';

describe('ApplicationBwflParentDetailsComponent', () => {
  let component: ApplicationBwflParentDetailsComponent;
  let fixture: ComponentFixture<ApplicationBwflParentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationBwflParentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationBwflParentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
