import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinealComponent } from './stockineal.component';

describe('StockinealComponent', () => {
  let component: StockinealComponent;
  let fixture: ComponentFixture<StockinealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
