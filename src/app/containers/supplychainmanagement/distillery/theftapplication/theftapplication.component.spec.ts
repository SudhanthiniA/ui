import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheftapplicationComponent } from './theftapplication.component';

describe('TheftapplicationComponent', () => {
  let component: TheftapplicationComponent;
  let fixture: ComponentFixture<TheftapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheftapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheftapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
