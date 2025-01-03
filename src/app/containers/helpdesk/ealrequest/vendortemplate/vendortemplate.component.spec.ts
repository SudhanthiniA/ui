import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortemplateComponent } from './vendortemplate.component';

describe('VendortemplateComponent', () => {
  let component: VendortemplateComponent;
  let fixture: ComponentFixture<VendortemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendortemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
