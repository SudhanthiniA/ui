import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinformComponent } from './stockinform.component';

describe('StockinformComponent', () => {
  let component: StockinformComponent;
  let fixture: ComponentFixture<StockinformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
