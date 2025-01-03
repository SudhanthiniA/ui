import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprocessedbeertransfertobbtComponent } from './addprocessedbeertransfertobbt.component';

describe('AddprocessedbeertransfertobbtComponent', () => {
  let component: AddprocessedbeertransfertobbtComponent;
  let fixture: ComponentFixture<AddprocessedbeertransfertobbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprocessedbeertransfertobbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprocessedbeertransfertobbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
