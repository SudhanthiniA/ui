import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd17RegisterofBondsComponent } from './pd17-registerof-bonds.component';

describe('Pd17RegisterofBondsComponent', () => {
  let component: Pd17RegisterofBondsComponent;
  let fixture: ComponentFixture<Pd17RegisterofBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd17RegisterofBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd17RegisterofBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
