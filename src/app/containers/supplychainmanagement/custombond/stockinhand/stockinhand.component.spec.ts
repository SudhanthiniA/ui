import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinhandComponent } from './stockinhand.component';

describe('StockinhandComponent', () => {
  let component: StockinhandComponent;
  let fixture: ComponentFixture<StockinhandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinhandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
