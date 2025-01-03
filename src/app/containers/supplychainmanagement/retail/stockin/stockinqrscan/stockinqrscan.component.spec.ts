import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinqrscanComponent } from './stockinqrscan.component';

describe('StockinqrscanComponent', () => {
  let component: StockinqrscanComponent;
  let fixture: ComponentFixture<StockinqrscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinqrscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinqrscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
