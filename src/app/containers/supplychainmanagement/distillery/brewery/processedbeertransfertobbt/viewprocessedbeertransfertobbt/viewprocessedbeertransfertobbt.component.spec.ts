import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprocessedbeertransfertobbtComponent } from './viewprocessedbeertransfertobbt.component';

describe('ViewprocessedbeertransfertobbtComponent', () => {
  let component: ViewprocessedbeertransfertobbtComponent;
  let fixture: ComponentFixture<ViewprocessedbeertransfertobbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprocessedbeertransfertobbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprocessedbeertransfertobbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
