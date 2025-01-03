import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchfromcbwComponent } from './dispatchfromcbw.component';

describe('DispatchfromcbwComponent', () => {
  let component: DispatchfromcbwComponent;
  let fixture: ComponentFixture<DispatchfromcbwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchfromcbwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchfromcbwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
