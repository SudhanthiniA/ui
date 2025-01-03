import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovematrixprodplanComponent } from './approvematrixprodplan.component';

describe('ApprovematrixprodplanComponent', () => {
  let component: ApprovematrixprodplanComponent;
  let fixture: ComponentFixture<ApprovematrixprodplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovematrixprodplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovematrixprodplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
