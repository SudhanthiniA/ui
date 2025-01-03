import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthanalindentacceptanceComponent } from './ethanalindentacceptance.component';

describe('EthanalindentacceptanceComponent', () => {
  let component: EthanalindentacceptanceComponent;
  let fixture: ComponentFixture<EthanalindentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthanalindentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthanalindentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
