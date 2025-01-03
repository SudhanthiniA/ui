import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwiseactivitylogComponent } from './userwiseactivitylog.component';

describe('UserwiseactivitylogComponent', () => {
  let component: UserwiseactivitylogComponent;
  let fixture: ComponentFixture<UserwiseactivitylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwiseactivitylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwiseactivitylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
