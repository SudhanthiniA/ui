import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpexsdeptdiswisependindComponent } from './upexsdeptdiswisependind.component';

describe('UpexsdeptdiswisependindComponent', () => {
  let component: UpexsdeptdiswisependindComponent;
  let fixture: ComponentFixture<UpexsdeptdiswisependindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpexsdeptdiswisependindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpexsdeptdiswisependindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
