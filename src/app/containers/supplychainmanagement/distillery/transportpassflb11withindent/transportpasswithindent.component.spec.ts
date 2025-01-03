import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpasswithindentComponent } from './transportpasswithindent.component';

describe('TransportpasswithindentComponent', () => {
  let component: TransportpasswithindentComponent;
  let fixture: ComponentFixture<TransportpasswithindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpasswithindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpasswithindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
