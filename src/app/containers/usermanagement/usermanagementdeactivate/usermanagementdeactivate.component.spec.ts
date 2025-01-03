import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementdeactivateComponent } from './usermanagementdeactivate.component';

describe('UsermanagementdeactivateComponent', () => {
  let component: UsermanagementdeactivateComponent;
  let fixture: ComponentFixture<UsermanagementdeactivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagementdeactivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementdeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
