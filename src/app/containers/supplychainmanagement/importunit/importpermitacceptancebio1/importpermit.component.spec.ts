import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitComponent } from './importpermit.component';

describe('ImportpermitComponent', () => {
  let component: ImportpermitComponent;
  let fixture: ComponentFixture<ImportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
