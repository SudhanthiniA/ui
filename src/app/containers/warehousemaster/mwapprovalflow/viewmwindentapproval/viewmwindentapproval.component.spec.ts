import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwindentapprovalComponent } from './viewmwindentapproval.component';

describe('ViewmwindentapprovalComponent', () => {
  let component: ViewmwindentapprovalComponent;
  let fixture: ComponentFixture<ViewmwindentapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwindentapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwindentapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
