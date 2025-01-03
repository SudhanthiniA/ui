import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewitrComponent } from './viewitr.component';

describe('ViewitrComponent', () => {
  let component: ViewitrComponent;
  let fixture: ComponentFixture<ViewitrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewitrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
