import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportpermitIdComponent } from './exportpermit-id.component';

describe('ExportpermitIdComponent', () => {
  let component: ExportpermitIdComponent;
  let fixture: ComponentFixture<ExportpermitIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportpermitIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportpermitIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
