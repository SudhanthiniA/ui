import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinEalComponent } from './stockin-eal.component';

describe('StockinEalComponent', () => {
  let component: StockinEalComponent;
  let fixture: ComponentFixture<StockinEalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinEalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinEalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
