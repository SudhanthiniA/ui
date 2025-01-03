import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportofgrainmaltspiritisComponent } from './importofgrainmaltspiritis.component';

describe('ImportofgrainmaltspiritisComponent', () => {
  let component: ImportofgrainmaltspiritisComponent;
  let fixture: ComponentFixture<ImportofgrainmaltspiritisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportofgrainmaltspiritisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportofgrainmaltspiritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
