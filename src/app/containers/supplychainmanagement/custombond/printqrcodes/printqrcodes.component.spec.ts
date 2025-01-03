import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintqrcodesComponent } from './printqrcodes.component';

describe('PrintqrcodesComponent', () => {
  let component: PrintqrcodesComponent;
  let fixture: ComponentFixture<PrintqrcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintqrcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintqrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
