import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualscanningComponent } from './manualscanning.component';

describe('ManualscanningComponent', () => {
  let component: ManualscanningComponent;
  let fixture: ComponentFixture<ManualscanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualscanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualscanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
