import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitreportsComponent } from './permitreports.component';

describe('PermitreportsComponent', () => {
  let component: PermitreportsComponent;
  let fixture: ComponentFixture<PermitreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
