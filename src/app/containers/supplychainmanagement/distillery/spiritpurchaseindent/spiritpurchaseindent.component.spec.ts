import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritpurchaseindentComponent } from './spiritpurchaseindent.component';

describe('SpiritpurchaseindentComponent', () => {
  let component: SpiritpurchaseindentComponent;
  let fixture: ComponentFixture<SpiritpurchaseindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritpurchaseindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritpurchaseindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
