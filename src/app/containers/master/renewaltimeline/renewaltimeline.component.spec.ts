import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewaltimelineComponent } from './renewaltimeline.component';

describe('RenewaltimelineComponent', () => {
  let component: RenewaltimelineComponent;
  let fixture: ComponentFixture<RenewaltimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewaltimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewaltimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
