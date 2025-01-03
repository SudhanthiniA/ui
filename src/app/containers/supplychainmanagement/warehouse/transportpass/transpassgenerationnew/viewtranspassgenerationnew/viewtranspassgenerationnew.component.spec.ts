import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranspassgenerationnewComponent } from './viewtranspassgenerationnew.component';

describe('ViewtranspassgenerationnewComponent', () => {
  let component: ViewtranspassgenerationnewComponent;
  let fixture: ComponentFixture<ViewtranspassgenerationnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranspassgenerationnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranspassgenerationnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
