import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgeneratecodeComponent } from './viewgeneratecode.component';

describe('ViewgeneratecodeComponent', () => {
  let component: ViewgeneratecodeComponent;
  let fixture: ComponentFixture<ViewgeneratecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgeneratecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgeneratecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
