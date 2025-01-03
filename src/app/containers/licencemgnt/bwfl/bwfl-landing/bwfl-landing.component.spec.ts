import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflLandingComponent } from './bwfl-landing.component';

describe('BwflLandingComponent', () => {
  let component: BwflLandingComponent;
  let fixture: ComponentFixture<BwflLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
