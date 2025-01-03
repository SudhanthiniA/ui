import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransferofbeerComponent } from './viewtransferofbeer.component';

describe('ViewtransferofbeerComponent', () => {
  let component: ViewtransferofbeerComponent;
  let fixture: ComponentFixture<ViewtransferofbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransferofbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransferofbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
