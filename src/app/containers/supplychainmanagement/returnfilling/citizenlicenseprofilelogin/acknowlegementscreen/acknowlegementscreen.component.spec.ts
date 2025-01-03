import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowlegementscreenComponent } from './acknowlegementscreen.component';

describe('AcknowlegementscreenComponent', () => {
  let component: AcknowlegementscreenComponent;
  let fixture: ComponentFixture<AcknowlegementscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowlegementscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowlegementscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
