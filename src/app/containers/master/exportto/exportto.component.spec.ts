import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporttoComponent } from './exportto.component';

describe('ExporttoComponent', () => {
  let component: ExporttoComponent;
  let fixture: ComponentFixture<ExporttoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporttoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
