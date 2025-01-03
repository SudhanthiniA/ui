import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscancellationComponent } from './passcancellation.component';

describe('PasscancellationComponent', () => {
  let component: PasscancellationComponent;
  let fixture: ComponentFixture<PasscancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasscancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
