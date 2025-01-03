import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwholesaleindentComponent } from './viewwholesaleindent.component';

describe('ViewwholesaleindentComponent', () => {
  let component: ViewwholesaleindentComponent;
  let fixture: ComponentFixture<ViewwholesaleindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwholesaleindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwholesaleindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
