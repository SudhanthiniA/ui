import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafttpComponent } from './drafttp.component';

describe('DrafttpComponent', () => {
  let component: DrafttpComponent;
  let fixture: ComponentFixture<DrafttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrafttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
