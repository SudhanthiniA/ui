import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitpassvehicleComponent } from './transitpassvehicle.component';

describe('TransitpassvehicleComponent', () => {
  let component: TransitpassvehicleComponent;
  let fixture: ComponentFixture<TransitpassvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitpassvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitpassvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
