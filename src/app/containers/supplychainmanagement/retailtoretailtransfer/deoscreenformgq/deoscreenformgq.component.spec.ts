import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoscreenformgqComponent } from './deoscreenformgq.component';

describe('DeoscreenformgqComponent', () => {
  let component: DeoscreenformgqComponent;
  let fixture: ComponentFixture<DeoscreenformgqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoscreenformgqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoscreenformgqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
