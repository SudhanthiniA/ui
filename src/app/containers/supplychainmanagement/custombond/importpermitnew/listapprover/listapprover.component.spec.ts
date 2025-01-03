import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapproverComponent } from './listapprover.component';

describe('ListapproverComponent', () => {
  let component: ListapproverComponent;
  let fixture: ComponentFixture<ListapproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
