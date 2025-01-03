import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportrequestComponent } from './importrequest.component';

describe('ImportrequestComponent', () => {
  let component: ImportrequestComponent;
  let fixture: ComponentFixture<ImportrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
