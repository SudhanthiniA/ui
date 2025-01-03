import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdDispatchComponent } from './csd-dispatch.component';

describe('CsdDispatchComponent', () => {
  let component: CsdDispatchComponent;
  let fixture: ComponentFixture<CsdDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
