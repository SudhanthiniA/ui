import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransferconfigurationmgrComponent } from './retailtransferconfigurationmgr.component';

describe('RetailtransferconfigurationmgrComponent', () => {
  let component: RetailtransferconfigurationmgrComponent;
  let fixture: ComponentFixture<RetailtransferconfigurationmgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransferconfigurationmgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransferconfigurationmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
