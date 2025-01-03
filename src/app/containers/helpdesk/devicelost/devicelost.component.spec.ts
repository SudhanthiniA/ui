import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicelostComponent } from './devicelost.component';

describe('DevicelostComponent', () => {
  let component: DevicelostComponent;
  let fixture: ComponentFixture<DevicelostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicelostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicelostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
