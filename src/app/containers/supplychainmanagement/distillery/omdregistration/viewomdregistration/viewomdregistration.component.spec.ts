import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewomdregistrationComponent } from './viewomdregistration.component';

describe('ViewomdregistrationComponent', () => {
  let component: ViewomdregistrationComponent;
  let fixture: ComponentFixture<ViewomdregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewomdregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewomdregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
