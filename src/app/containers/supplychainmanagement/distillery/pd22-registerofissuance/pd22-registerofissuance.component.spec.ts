import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd22RegisterofissuanceComponent } from './pd22-registerofissuance.component';

describe('Pd22RegisterofissuanceComponent', () => {
  let component: Pd22RegisterofissuanceComponent;
  let fixture: ComponentFixture<Pd22RegisterofissuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd22RegisterofissuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd22RegisterofissuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
