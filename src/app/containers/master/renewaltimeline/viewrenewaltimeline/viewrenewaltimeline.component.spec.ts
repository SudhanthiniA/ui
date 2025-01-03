import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrenewaltimelineComponent } from './viewrenewaltimeline.component';

describe('ViewrenewaltimelineComponent', () => {
  let component: ViewrenewaltimelineComponent;
  let fixture: ComponentFixture<ViewrenewaltimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrenewaltimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrenewaltimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
