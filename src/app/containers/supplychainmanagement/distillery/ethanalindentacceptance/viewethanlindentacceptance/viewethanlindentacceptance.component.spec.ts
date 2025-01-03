import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewethanlindentacceptanceComponent } from './viewethanlindentacceptance.component';

describe('ViewethanlindentacceptanceComponent', () => {
  let component: ViewethanlindentacceptanceComponent;
  let fixture: ComponentFixture<ViewethanlindentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewethanlindentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewethanlindentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
