import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingprodplanComponent } from './addbottlingprodplan.component';

describe('AddbottlingprodplanComponent', () => {
  let component: AddbottlingprodplanComponent;
  let fixture: ComponentFixture<AddbottlingprodplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingprodplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingprodplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
