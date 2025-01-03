import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassetassignComponent } from './viewassetassign.component';

describe('ViewassetassignComponent', () => {
  let component: ViewassetassignComponent;
  let fixture: ComponentFixture<ViewassetassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassetassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassetassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
