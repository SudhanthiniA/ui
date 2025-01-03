import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportorderdispatchComponent } from './exportorderdispatch.component';

describe('ExportorderdispatchComponent', () => {
  let component: ExportorderdispatchComponent;
  let fixture: ComponentFixture<ExportorderdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportorderdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportorderdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
