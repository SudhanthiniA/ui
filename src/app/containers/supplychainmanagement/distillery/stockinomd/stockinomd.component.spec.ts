import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinomdComponent } from './stockinomd.component';

describe('StockinomdComponent', () => {
  let component: StockinomdComponent;
  let fixture: ComponentFixture<StockinomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
