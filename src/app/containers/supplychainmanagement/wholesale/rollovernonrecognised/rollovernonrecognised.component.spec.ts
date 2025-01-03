import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollovernonrecognisedComponent } from './rollovernonrecognised.component';

describe('RollovernonrecognisedComponent', () => {
  let component: RollovernonrecognisedComponent;
  let fixture: ComponentFixture<RollovernonrecognisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollovernonrecognisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollovernonrecognisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
