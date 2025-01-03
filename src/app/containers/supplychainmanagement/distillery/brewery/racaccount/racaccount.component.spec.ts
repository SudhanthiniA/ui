import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaccountComponent } from './racaccount.component';

describe('RacaccountComponent', () => {
  let component: RacaccountComponent;
  let fixture: ComponentFixture<RacaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
