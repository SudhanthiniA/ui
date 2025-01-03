import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMf12molassesregisterComponent } from './view-mf12molassesregister.component';

describe('ViewMf12molassesregisterComponent', () => {
  let component: ViewMf12molassesregisterComponent;
  let fixture: ComponentFixture<ViewMf12molassesregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMf12molassesregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMf12molassesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
