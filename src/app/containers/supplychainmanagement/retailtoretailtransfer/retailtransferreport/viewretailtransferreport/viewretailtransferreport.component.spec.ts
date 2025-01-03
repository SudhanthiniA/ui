import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewretailtransferreportComponent } from './viewretailtransferreport.component';

describe('ViewretailtransferreportComponent', () => {
  let component: ViewretailtransferreportComponent;
  let fixture: ComponentFixture<ViewretailtransferreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewretailtransferreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewretailtransferreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
