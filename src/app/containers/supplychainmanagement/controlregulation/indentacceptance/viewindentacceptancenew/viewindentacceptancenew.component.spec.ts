import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentacceptancenewComponent } from './viewindentacceptancenew.component';

describe('ViewindentacceptancenewComponent', () => {
  let component: ViewindentacceptancenewComponent;
  let fixture: ComponentFixture<ViewindentacceptancenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentacceptancenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentacceptancenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
