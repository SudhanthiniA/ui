import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitOutsideUpComponent } from './importpermit-outside-up.component';

describe('ImportpermitOutsideUpComponent', () => {
  let component: ImportpermitOutsideUpComponent;
  let fixture: ComponentFixture<ImportpermitOutsideUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitOutsideUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitOutsideUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
