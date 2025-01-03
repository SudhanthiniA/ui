import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquotarevenuetransferfeesComponent } from './viewquotarevenuetransferfees.component';

describe('ViewquotarevenuetransferfeesComponent', () => {
  let component: ViewquotarevenuetransferfeesComponent;
  let fixture: ComponentFixture<ViewquotarevenuetransferfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquotarevenuetransferfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquotarevenuetransferfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
