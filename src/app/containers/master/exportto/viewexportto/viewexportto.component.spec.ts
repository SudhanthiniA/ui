import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexporttoComponent } from './viewexportto.component';

describe('ViewexporttoComponent', () => {
  let component: ViewexporttoComponent;
  let fixture: ComponentFixture<ViewexporttoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexporttoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexporttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
