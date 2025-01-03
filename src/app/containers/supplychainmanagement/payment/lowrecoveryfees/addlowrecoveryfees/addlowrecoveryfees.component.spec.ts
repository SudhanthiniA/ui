import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlowrecoveryfeesComponent } from './addlowrecoveryfees.component';

describe('AddlowrecoveryfeesComponent', () => {
  let component: AddlowrecoveryfeesComponent;
  let fixture: ComponentFixture<AddlowrecoveryfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlowrecoveryfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlowrecoveryfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
