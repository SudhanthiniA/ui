import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitstatusComponent } from './importpermitstatus.component';

describe('ImportpermitstatusComponent', () => {
  let component: ImportpermitstatusComponent;
  let fixture: ComponentFixture<ImportpermitstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
