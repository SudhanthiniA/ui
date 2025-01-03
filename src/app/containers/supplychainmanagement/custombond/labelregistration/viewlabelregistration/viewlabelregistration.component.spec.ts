import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabelregistrationComponent } from './viewlabelregistration.component';

describe('ViewlabelregistrationComponent', () => {
  let component: ViewlabelregistrationComponent;
  let fixture: ComponentFixture<ViewlabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
