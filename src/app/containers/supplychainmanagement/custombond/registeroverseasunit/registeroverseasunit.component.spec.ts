import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteroverseasunitComponent } from './registeroverseasunit.component';

describe('RegisteroverseasunitComponent', () => {
  let component: RegisteroverseasunitComponent;
  let fixture: ComponentFixture<RegisteroverseasunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteroverseasunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteroverseasunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
