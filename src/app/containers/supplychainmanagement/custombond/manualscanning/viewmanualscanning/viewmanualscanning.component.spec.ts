import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmanualscanningComponent } from './viewmanualscanning.component';

describe('ViewmanualscanningComponent', () => {
  let component: ViewmanualscanningComponent;
  let fixture: ComponentFixture<ViewmanualscanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmanualscanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmanualscanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
