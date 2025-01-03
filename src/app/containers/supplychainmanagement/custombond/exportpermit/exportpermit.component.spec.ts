import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportpermitComponent } from './exportpermit.component';

describe('ExportpermitComponent', () => {
  let component: ExportpermitComponent;
  let fixture: ComponentFixture<ExportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
