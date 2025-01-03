import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforlableapprovalComponent } from './applicationforlableapproval.component';

describe('ApplicationforlableapprovalComponent', () => {
  let component: ApplicationforlableapprovalComponent;
  let fixture: ComponentFixture<ApplicationforlableapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforlableapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforlableapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
