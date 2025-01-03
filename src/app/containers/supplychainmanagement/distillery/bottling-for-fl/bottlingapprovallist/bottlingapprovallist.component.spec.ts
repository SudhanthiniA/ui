import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingapprovallistComponent } from './bottlingapprovallist.component';

describe('BottlingapprovallistComponent', () => {
  let component: BottlingapprovallistComponent;
  let fixture: ComponentFixture<BottlingapprovallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingapprovallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingapprovallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
