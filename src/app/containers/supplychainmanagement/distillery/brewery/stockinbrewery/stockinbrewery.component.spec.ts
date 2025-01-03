import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinbreweryComponent } from './stockinbrewery.component';

describe('StockinbreweryComponent', () => {
  let component: StockinbreweryComponent;
  let fixture: ComponentFixture<StockinbreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinbreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinbreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
