import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedbeertransfertobbtComponent } from './processedbeertransfertobbt.component';

describe('ProcessedbeertransfertobbtComponent', () => {
  let component: ProcessedbeertransfertobbtComponent;
  let fixture: ComponentFixture<ProcessedbeertransfertobbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedbeertransfertobbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedbeertransfertobbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
