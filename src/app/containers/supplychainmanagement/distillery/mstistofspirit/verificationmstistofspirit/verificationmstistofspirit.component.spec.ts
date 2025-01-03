import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationmstistofspiritComponent } from './verificationmstistofspirit.component';

describe('VerificationmstistofspiritComponent', () => {
  let component: VerificationmstistofspiritComponent;
  let fixture: ComponentFixture<VerificationmstistofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationmstistofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationmstistofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
