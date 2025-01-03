import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankdismentleComponent } from './viewtankdismentle.component';

describe('ViewtankdismentleComponent', () => {
  let component: ViewtankdismentleComponent;
  let fixture: ComponentFixture<ViewtankdismentleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankdismentleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankdismentleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
