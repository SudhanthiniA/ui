import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingtransportpassmgmtComponent } from './bottlingtransportpassmgmt.component';

describe('BottlingtransportpassmgmtComponent', () => {
  let component: BottlingtransportpassmgmtComponent;
  let fixture: ComponentFixture<BottlingtransportpassmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingtransportpassmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingtransportpassmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
