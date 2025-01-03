import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrenewaltimelineComponent } from './addrenewaltimeline.component';

describe('AddrenewaltimelineComponent', () => {
  let component: AddrenewaltimelineComponent;
  let fixture: ComponentFixture<AddrenewaltimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrenewaltimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrenewaltimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
