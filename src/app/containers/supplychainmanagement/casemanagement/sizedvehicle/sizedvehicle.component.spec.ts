import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedvehicleComponent } from './sizedvehicle.component';

describe('SizedvehicleComponent', () => {
  let component: SizedvehicleComponent;
  let fixture: ComponentFixture<SizedvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizedvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
