import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktransferComponent } from './tanktransfer.component';

describe('TanktransferComponent', () => {
  let component: TanktransferComponent;
  let fixture: ComponentFixture<TanktransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanktransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
