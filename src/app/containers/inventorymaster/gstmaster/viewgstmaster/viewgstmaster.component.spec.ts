import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgstmasterComponent } from './viewgstmaster.component';

describe('ViewgstmasterComponent', () => {
  let component: ViewgstmasterComponent;
  let fixture: ComponentFixture<ViewgstmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgstmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgstmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
