import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtingenrationComponent } from './etingenration.component';

describe('EtingenrationComponent', () => {
  let component: EtingenrationComponent;
  let fixture: ComponentFixture<EtingenrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtingenrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtingenrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
