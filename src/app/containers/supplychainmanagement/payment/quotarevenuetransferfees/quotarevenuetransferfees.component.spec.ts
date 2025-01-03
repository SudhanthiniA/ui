import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotarevenuetransferfeesComponent } from './quotarevenuetransferfees.component';

describe('QuotarevenuetransferfeesComponent', () => {
  let component: QuotarevenuetransferfeesComponent;
  let fixture: ComponentFixture<QuotarevenuetransferfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotarevenuetransferfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotarevenuetransferfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
