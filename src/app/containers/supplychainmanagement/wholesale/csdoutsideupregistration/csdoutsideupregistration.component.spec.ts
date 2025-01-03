import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdoutsideupregistrationComponent } from './csdoutsideupregistration.component';

describe('CsdoutsideupregistrationComponent', () => {
  let component: CsdoutsideupregistrationComponent;
  let fixture: ComponentFixture<CsdoutsideupregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdoutsideupregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdoutsideupregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
