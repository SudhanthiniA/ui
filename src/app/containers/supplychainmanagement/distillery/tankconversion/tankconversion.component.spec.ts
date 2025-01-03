import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankconversionComponent } from './tankconversion.component';

describe('TankconversionComponent', () => {
  let component: TankconversionComponent;
  let fixture: ComponentFixture<TankconversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankconversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
