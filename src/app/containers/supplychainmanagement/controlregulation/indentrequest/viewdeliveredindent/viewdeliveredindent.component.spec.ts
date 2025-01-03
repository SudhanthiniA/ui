import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeliveredindentComponent } from './viewdeliveredindent.component';

describe('ViewdeliveredindentComponent', () => {
  let component: ViewdeliveredindentComponent;
  let fixture: ComponentFixture<ViewdeliveredindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeliveredindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeliveredindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
