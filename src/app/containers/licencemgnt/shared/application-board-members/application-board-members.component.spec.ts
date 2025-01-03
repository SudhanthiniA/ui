import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationBoardMembersComponent } from './application-board-members.component';

describe('ApplicationBoardMembersComponent', () => {
  let component: ApplicationBoardMembersComponent;
  let fixture: ComponentFixture<ApplicationBoardMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationBoardMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationBoardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
