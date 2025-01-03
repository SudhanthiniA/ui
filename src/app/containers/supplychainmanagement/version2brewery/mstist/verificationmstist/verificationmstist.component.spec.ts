import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationmstistComponent } from './verificationmstist.component';

describe('VerificationmstistComponent', () => {
  let component: VerificationmstistComponent;
  let fixture: ComponentFixture<VerificationmstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationmstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationmstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
