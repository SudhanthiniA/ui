import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpremisestypeComponent } from './viewpremisestype.component';

describe('ViewpremisestypeComponent', () => {
  let component: ViewpremisestypeComponent;
  let fixture: ComponentFixture<ViewpremisestypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpremisestypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpremisestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
