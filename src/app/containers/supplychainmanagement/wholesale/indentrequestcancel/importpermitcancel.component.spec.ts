import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitcancelComponent } from './importpermitcancel.component';

describe('ImportpermitcancelComponent', () => {
  let component: ImportpermitcancelComponent;
  let fixture: ComponentFixture<ImportpermitcancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitcancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
