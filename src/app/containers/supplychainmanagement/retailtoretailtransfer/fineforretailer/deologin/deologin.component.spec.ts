import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeologinComponent } from './deologin.component';

describe('DeologinComponent', () => {
  let component: DeologinComponent;
  let fixture: ComponentFixture<DeologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
