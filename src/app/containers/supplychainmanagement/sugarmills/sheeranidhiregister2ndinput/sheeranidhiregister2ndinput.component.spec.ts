import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sheeranidhiregister2ndinputComponent } from './sheeranidhiregister2ndinput.component';

describe('Sheeranidhiregister2ndinputComponent', () => {
  let component: Sheeranidhiregister2ndinputComponent;
  let fixture: ComponentFixture<Sheeranidhiregister2ndinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sheeranidhiregister2ndinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sheeranidhiregister2ndinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
