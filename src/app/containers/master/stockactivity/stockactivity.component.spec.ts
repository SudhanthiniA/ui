import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockactivityComponent } from './stockactivity.component';

describe('StockactivityComponent', () => {
  let component: StockactivityComponent;
  let fixture: ComponentFixture<StockactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
