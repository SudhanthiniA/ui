import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMolassestypeComponent } from './view-molassestype.component';

describe('ViewMolassestypeComponent', () => {
  let component: ViewMolassestypeComponent;
  let fixture: ComponentFixture<ViewMolassestypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMolassestypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMolassestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
