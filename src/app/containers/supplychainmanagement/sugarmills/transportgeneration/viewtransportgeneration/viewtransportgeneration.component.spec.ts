import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportgenerationComponent } from './viewtransportgeneration.component';

describe('ViewtransportgenerationComponent', () => {
  let component: ViewtransportgenerationComponent;
  let fixture: ComponentFixture<ViewtransportgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
