import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassparentunitComponent } from './transportpassparentunit.component';

describe('TransportpassparentunitComponent', () => {
  let component: TransportpassparentunitComponent;
  let fixture: ComponentFixture<TransportpassparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
