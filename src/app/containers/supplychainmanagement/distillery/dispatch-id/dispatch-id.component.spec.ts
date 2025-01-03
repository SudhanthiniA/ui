import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchIdComponent } from './dispatch-id.component';

describe('DispatchIdComponent', () => {
  let component: DispatchIdComponent;
  let fixture: ComponentFixture<DispatchIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
