import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentacceptanceComponent } from './viewindentacceptance.component';

describe('ViewindentacceptanceComponent', () => {
  let component: ViewindentacceptanceComponent;
  let fixture: ComponentFixture<ViewindentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
