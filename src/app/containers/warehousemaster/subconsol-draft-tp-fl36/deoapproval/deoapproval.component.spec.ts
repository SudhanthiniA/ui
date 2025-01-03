import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoapprovalComponent } from './deoapproval.component';

describe('DeoapprovalComponent', () => {
  let component: DeoapprovalComponent;
  let fixture: ComponentFixture<DeoapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
