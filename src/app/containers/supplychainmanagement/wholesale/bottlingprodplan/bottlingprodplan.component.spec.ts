import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingprodplanComponent } from './bottlingprodplan.component';

describe('BottlingprodplanComponent', () => {
  let component: BottlingprodplanComponent;
  let fixture: ComponentFixture<BottlingprodplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingprodplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingprodplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
