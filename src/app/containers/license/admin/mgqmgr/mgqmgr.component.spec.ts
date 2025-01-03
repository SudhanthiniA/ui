import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgqmgrComponent } from './mgqmgr.component';

describe('MgqmgrComponent', () => {
  let component: MgqmgrComponent;
  let fixture: ComponentFixture<MgqmgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgqmgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgqmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
