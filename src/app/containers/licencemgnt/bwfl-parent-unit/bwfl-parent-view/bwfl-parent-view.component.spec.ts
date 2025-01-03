import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflParentViewComponent } from './bwfl-parent-view.component';

describe('BwflParentViewComponent', () => {
  let component: BwflParentViewComponent;
  let fixture: ComponentFixture<BwflParentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflParentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflParentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
