import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlowrecoveryfeesComponent } from './viewlowrecoveryfees.component';

describe('ViewlowrecoveryfeesComponent', () => {
  let component: ViewlowrecoveryfeesComponent;
  let fixture: ComponentFixture<ViewlowrecoveryfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlowrecoveryfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlowrecoveryfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
