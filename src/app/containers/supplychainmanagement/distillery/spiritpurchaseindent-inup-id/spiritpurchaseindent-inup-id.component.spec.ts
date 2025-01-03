import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritpurchaseindentInupIdComponent } from './spiritpurchaseindent-inup-id.component';

describe('SpiritpurchaseindentInupIdComponent', () => {
  let component: SpiritpurchaseindentInupIdComponent;
  let fixture: ComponentFixture<SpiritpurchaseindentInupIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritpurchaseindentInupIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritpurchaseindentInupIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
