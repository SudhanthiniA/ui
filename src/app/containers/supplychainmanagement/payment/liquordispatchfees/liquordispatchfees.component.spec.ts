import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquordispatchfeesComponent } from './liquordispatchfees.component';

describe('LiquordispatchfeesComponent', () => {
  let component: LiquordispatchfeesComponent;
  let fixture: ComponentFixture<LiquordispatchfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquordispatchfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquordispatchfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
