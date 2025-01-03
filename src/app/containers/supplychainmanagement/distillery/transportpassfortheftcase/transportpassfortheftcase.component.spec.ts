import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassfortheftcaseComponent } from './transportpassfortheftcase.component';

describe('TransportpassfortheftcaseComponent', () => {
  let component: TransportpassfortheftcaseComponent;
  let fixture: ComponentFixture<TransportpassfortheftcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassfortheftcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassfortheftcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
