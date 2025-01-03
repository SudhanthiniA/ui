import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranspassgenerationComponent } from './viewtranspassgeneration.component';

describe('ViewtranspassgenerationComponent', () => {
  let component: ViewtranspassgenerationComponent;
  let fixture: ComponentFixture<ViewtranspassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranspassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranspassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
