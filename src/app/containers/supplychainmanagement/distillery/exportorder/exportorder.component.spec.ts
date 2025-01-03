import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportorderComponent } from './exportorder.component';

describe('ExportorderComponent', () => {
  let component: ExportorderComponent;
  let fixture: ComponentFixture<ExportorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
