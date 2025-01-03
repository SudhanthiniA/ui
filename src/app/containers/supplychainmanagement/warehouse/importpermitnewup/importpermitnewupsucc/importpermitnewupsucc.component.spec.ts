import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitnewupsuccComponent } from './importpermitnewupsucc.component';

describe('ImportpermitnewupsuccComponent', () => {
  let component: ImportpermitnewupsuccComponent;
  let fixture: ComponentFixture<ImportpermitnewupsuccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitnewupsuccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitnewupsuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
