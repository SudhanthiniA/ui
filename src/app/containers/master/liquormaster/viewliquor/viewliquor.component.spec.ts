import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewliquorComponent } from './viewliquor.component';

describe('ViewliquorComponent', () => {
  let component: ViewliquorComponent;
  let fixture: ComponentFixture<ViewliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
