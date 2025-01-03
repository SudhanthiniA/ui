import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewredistillationofspiritComponent } from './viewredistillationofspirit.component';

describe('ViewredistillationofspiritComponent', () => {
  let component: ViewredistillationofspiritComponent;
  let fixture: ComponentFixture<ViewredistillationofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewredistillationofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewredistillationofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
