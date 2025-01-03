import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingprodplanComponent } from './viewbottlingprodplan.component';

describe('ViewbottlingprodplanComponent', () => {
  let component: ViewbottlingprodplanComponent;
  let fixture: ComponentFixture<ViewbottlingprodplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingprodplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingprodplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
