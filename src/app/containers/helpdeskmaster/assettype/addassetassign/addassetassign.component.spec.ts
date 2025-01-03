import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassetassignComponent } from './addassetassign.component';

describe('AddassetassignComponent', () => {
  let component: AddassetassignComponent;
  let fixture: ComponentFixture<AddassetassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddassetassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassetassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
