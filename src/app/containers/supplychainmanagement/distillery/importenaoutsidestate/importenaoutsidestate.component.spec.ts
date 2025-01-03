import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportenaoutsidestateComponent } from './importenaoutsidestate.component';

describe('ImportenaoutsidestateComponent', () => {
  let component: ImportenaoutsidestateComponent;
  let fixture: ComponentFixture<ImportenaoutsidestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportenaoutsidestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportenaoutsidestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
