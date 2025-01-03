import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentrequestsendComponent } from './indentrequestsend.component';

describe('IndentrequestsendComponent', () => {
  let component: IndentrequestsendComponent;
  let fixture: ComponentFixture<IndentrequestsendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentrequestsendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentrequestsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
