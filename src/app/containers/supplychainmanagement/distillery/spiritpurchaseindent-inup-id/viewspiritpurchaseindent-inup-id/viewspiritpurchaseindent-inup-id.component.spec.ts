import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspiritpurchaseindentInupIdComponent } from './viewspiritpurchaseindent-inup-id.component';

describe('ViewspiritpurchaseindentInupIdComponent', () => {
  let component: ViewspiritpurchaseindentInupIdComponent;
  let fixture: ComponentFixture<ViewspiritpurchaseindentInupIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspiritpurchaseindentInupIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspiritpurchaseindentInupIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
