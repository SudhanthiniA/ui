import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueofrawComponent } from './issueofraw.component';

describe('IssueofrawComponent', () => {
  let component: IssueofrawComponent;
  let fixture: ComponentFixture<IssueofrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueofrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueofrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
