import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewliquortypeComponent } from './viewliquortype.component';

describe('ViewliquortypeComponent', () => {
  let component: ViewliquortypeComponent;
  let fixture: ComponentFixture<ViewliquortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewliquortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewliquortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
