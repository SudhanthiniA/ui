import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitnewupComponent } from './importpermitnewup.component';

describe('ImportpermitnewupComponent', () => {
  let component: ImportpermitnewupComponent;
  let fixture: ComponentFixture<ImportpermitnewupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitnewupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitnewupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
