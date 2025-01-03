import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovallabelrequestplanComponent } from './approvallabelrequestplan.component';

describe('ApprovallabelrequestplanComponent', () => {
  let component: ApprovallabelrequestplanComponent;
  let fixture: ComponentFixture<ApprovallabelrequestplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovallabelrequestplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovallabelrequestplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
