import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflParentFormComponent } from './bwfl-parent-form.component';

describe('BwflParentFormComponent', () => {
  let component: BwflParentFormComponent;
  let fixture: ComponentFixture<BwflParentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflParentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
