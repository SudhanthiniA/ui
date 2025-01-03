import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissalesandtransferComponent } from './missalesandtransfer.component';

describe('MissalesandtransferComponent', () => {
  let component: MissalesandtransferComponent;
  let fixture: ComponentFixture<MissalesandtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissalesandtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissalesandtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
