import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleindentComponent } from './wholesaleindent.component';

describe('WholesaleindentComponent', () => {
  let component: WholesaleindentComponent;
  let fixture: ComponentFixture<WholesaleindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaleindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaleindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
