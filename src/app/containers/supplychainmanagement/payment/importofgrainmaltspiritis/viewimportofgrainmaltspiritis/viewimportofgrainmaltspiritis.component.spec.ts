import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportofgrainmaltspiritisComponent } from './viewimportofgrainmaltspiritis.component';

describe('ViewimportofgrainmaltspiritisComponent', () => {
  let component: ViewimportofgrainmaltspiritisComponent;
  let fixture: ComponentFixture<ViewimportofgrainmaltspiritisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportofgrainmaltspiritisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportofgrainmaltspiritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
