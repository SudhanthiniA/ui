import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalemonocartonindentacceptanceComponent } from './wholesalemonocartonindentacceptance.component';

describe('WholesalemonocartonindentacceptanceComponent', () => {
  let component: WholesalemonocartonindentacceptanceComponent;
  let fixture: ComponentFixture<WholesalemonocartonindentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalemonocartonindentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalemonocartonindentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
