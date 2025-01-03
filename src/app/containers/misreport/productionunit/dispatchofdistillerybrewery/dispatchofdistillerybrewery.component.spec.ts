import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchofdistillerybreweryComponent } from './dispatchofdistillerybrewery.component';

describe('DispatchofdistillerybreweryComponent', () => {
  let component: DispatchofdistillerybreweryComponent;
  let fixture: ComponentFixture<DispatchofdistillerybreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchofdistillerybreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchofdistillerybreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
