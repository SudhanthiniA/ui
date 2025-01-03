import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspiritpurchaseindentComponent } from './viewspiritpurchaseindent.component';

describe('ViewspiritpurchaseindentComponent', () => {
  let component: ViewspiritpurchaseindentComponent;
  let fixture: ComponentFixture<ViewspiritpurchaseindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspiritpurchaseindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspiritpurchaseindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
