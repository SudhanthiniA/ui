import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoscreenformgrComponent } from './deoscreenformgr.component';

describe('DeoscreenformgrComponent', () => {
  let component: DeoscreenformgrComponent;
  let fixture: ComponentFixture<DeoscreenformgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoscreenformgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoscreenformgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
