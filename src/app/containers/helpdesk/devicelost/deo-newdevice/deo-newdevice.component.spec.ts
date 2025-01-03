import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNewdeviceComponent } from './deo-newdevice.component';

describe('DeoNewdeviceComponent', () => {
  let component: DeoNewdeviceComponent;
  let fixture: ComponentFixture<DeoNewdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNewdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNewdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
