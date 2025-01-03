import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordispatchviewComponent } from './vendordispatchview.component';

describe('VendordispatchviewComponent', () => {
  let component: VendordispatchviewComponent;
  let fixture: ComponentFixture<VendordispatchviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordispatchviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordispatchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
