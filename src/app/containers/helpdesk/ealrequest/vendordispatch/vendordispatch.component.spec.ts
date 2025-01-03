import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordispatchComponent } from './vendordispatch.component';

describe('VendordispatchComponent', () => {
  let component: VendordispatchComponent;
  let fixture: ComponentFixture<VendordispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
