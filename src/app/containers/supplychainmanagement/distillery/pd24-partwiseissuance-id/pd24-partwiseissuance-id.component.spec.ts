import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd24PartwiseissuanceIdComponent } from './pd24-partwiseissuance-id.component';

describe('Pd24PartwiseissuanceIdComponent', () => {
  let component: Pd24PartwiseissuanceIdComponent;
  let fixture: ComponentFixture<Pd24PartwiseissuanceIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd24PartwiseissuanceIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd24PartwiseissuanceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
