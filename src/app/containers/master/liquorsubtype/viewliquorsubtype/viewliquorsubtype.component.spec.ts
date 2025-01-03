import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewliquorsubtypeComponent } from './viewliquorsubtype.component';

describe('ViewliquorsubtypeComponent', () => {
  let component: ViewliquorsubtypeComponent;
  let fixture: ComponentFixture<ViewliquorsubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewliquorsubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewliquorsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
