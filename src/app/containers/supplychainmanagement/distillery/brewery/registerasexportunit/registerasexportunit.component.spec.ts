import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterasexportunitComponent } from './registerasexportunit.component';

describe('RegisterasexportunitComponent', () => {
  let component: RegisterasexportunitComponent;
  let fixture: ComponentFixture<RegisterasexportunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterasexportunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterasexportunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
