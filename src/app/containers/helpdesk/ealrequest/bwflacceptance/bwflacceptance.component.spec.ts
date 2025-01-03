import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflacceptanceComponent } from './bwflacceptance.component';

describe('BwflacceptanceComponent', () => {
  let component: BwflacceptanceComponent;
  let fixture: ComponentFixture<BwflacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
