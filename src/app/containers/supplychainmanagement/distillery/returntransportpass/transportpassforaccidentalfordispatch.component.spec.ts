import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassforaccidentalfordispatchComponent } from './transportpassforaccidentalfordispatch.component';

describe('TransportpassforaccidentalfordispatchComponent', () => {
  let component: TransportpassforaccidentalfordispatchComponent;
  let fixture: ComponentFixture<TransportpassforaccidentalfordispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassforaccidentalfordispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassforaccidentalfordispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
