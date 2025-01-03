import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltymasterComponent } from './penaltymaster.component';

describe('PenaltymasterComponent', () => {
  let component: PenaltymasterComponent;
  let fixture: ComponentFixture<PenaltymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
