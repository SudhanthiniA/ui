import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovematrixprodplanlistComponent } from './approvematrixprodplanlist.component';

describe('ApprovematrixprodplanlistComponent', () => {
  let component: ApprovematrixprodplanlistComponent;
  let fixture: ComponentFixture<ApprovematrixprodplanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovematrixprodplanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovematrixprodplanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
