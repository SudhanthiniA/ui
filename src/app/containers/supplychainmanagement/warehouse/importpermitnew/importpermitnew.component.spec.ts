import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitnewComponent } from './importpermitnew.component';

describe('ImportpermitnewComponent', () => {
  let component: ImportpermitnewComponent;
  let fixture: ComponentFixture<ImportpermitnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
