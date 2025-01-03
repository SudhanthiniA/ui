import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportoforderComponent } from './importoforder.component';

describe('ImportoforderComponent', () => {
  let component: ImportoforderComponent;
  let fixture: ComponentFixture<ImportoforderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportoforderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportoforderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
