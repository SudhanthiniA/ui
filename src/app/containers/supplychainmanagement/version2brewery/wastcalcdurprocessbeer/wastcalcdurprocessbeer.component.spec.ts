import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastcalcdurprocessbeerComponent } from './wastcalcdurprocessbeer.component';

describe('WastcalcdurprocessbeerComponent', () => {
  let component: WastcalcdurprocessbeerComponent;
  let fixture: ComponentFixture<WastcalcdurprocessbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastcalcdurprocessbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastcalcdurprocessbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
