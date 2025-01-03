import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermanagementComponent } from './registermanagement.component';

describe('RegistermanagementComponent', () => {
  let component: RegistermanagementComponent;
  let fixture: ComponentFixture<RegistermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
