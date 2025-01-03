import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdregistrationComponent } from './omdregistration.component';

describe('OmdregistrationComponent', () => {
  let component: OmdregistrationComponent;
  let fixture: ComponentFixture<OmdregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
