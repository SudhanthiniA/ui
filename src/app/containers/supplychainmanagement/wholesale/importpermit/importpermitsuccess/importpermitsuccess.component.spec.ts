import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitsuccessComponent } from './importpermitsuccess.component';

describe('ImportpermitsuccessComponent', () => {
  let component: ImportpermitsuccessComponent;
  let fixture: ComponentFixture<ImportpermitsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
