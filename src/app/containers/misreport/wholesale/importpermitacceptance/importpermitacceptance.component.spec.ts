import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitacceptanceComponent } from './importpermitacceptance.component';

describe('ImportpermitacceptanceComponent', () => {
  let component: ImportpermitacceptanceComponent;
  let fixture: ComponentFixture<ImportpermitacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
