import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd24PartwiseissuanceComponent } from './pd24-partwiseissuance.component';

describe('Pd24PartwiseissuanceComponent', () => {
  let component: Pd24PartwiseissuanceComponent;
  let fixture: ComponentFixture<Pd24PartwiseissuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd24PartwiseissuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd24PartwiseissuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
