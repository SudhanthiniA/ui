import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgatepassfrombreweryComponent } from './viewgatepassfrombrewery.component';

describe('ViewgatepassfrombreweryComponent', () => {
  let component: ViewgatepassfrombreweryComponent;
  let fixture: ComponentFixture<ViewgatepassfrombreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgatepassfrombreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgatepassfrombreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
