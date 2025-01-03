import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfinalgatepassComponent } from './viewfinalgatepass.component';

describe('ViewfinalgatepassComponent', () => {
  let component: ViewfinalgatepassComponent;
  let fixture: ComponentFixture<ViewfinalgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfinalgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfinalgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
