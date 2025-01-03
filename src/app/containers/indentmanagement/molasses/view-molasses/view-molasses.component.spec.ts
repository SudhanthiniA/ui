import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMolassesComponent } from './view-molasses.component';

describe('ViewMolassesComponent', () => {
  let component: ViewMolassesComponent;
  let fixture: ComponentFixture<ViewMolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
