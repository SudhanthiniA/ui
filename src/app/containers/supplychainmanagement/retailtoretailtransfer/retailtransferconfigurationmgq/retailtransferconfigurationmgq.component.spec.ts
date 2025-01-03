import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransferconfigurationmgqComponent } from './retailtransferconfigurationmgq.component';

describe('RetailtransferconfigurationmgqComponent', () => {
  let component: RetailtransferconfigurationmgqComponent;
  let fixture: ComponentFixture<RetailtransferconfigurationmgqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransferconfigurationmgqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransferconfigurationmgqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
