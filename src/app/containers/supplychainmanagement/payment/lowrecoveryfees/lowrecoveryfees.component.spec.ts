import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowrecoveryfeesComponent } from './lowrecoveryfees.component';

describe('LowrecoveryfeesComponent', () => {
  let component: LowrecoveryfeesComponent;
  let fixture: ComponentFixture<LowrecoveryfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowrecoveryfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowrecoveryfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
