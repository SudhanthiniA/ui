import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewremovalofspiritfordenaturingComponent } from './viewremovalofspiritfordenaturing.component';

describe('ViewremovalofspiritfordenaturingComponent', () => {
  let component: ViewremovalofspiritfordenaturingComponent;
  let fixture: ComponentFixture<ViewremovalofspiritfordenaturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewremovalofspiritfordenaturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewremovalofspiritfordenaturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
