import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchdistrictComponent } from './dispatchdistrict.component';

describe('DispatchdistrictComponent', () => {
  let component: DispatchdistrictComponent;
  let fixture: ComponentFixture<DispatchdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
