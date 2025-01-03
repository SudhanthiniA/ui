import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationtypeComponent } from './viewapplicationtype.component';

describe('ViewapplicationtypeComponent', () => {
  let component: ViewapplicationtypeComponent;
  let fixture: ComponentFixture<ViewapplicationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapplicationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapplicationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
