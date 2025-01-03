import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportpassoutsideupComponent } from './exportpassoutsideup.component';

describe('ExportpassoutsideupComponent', () => {
  let component: ExportpassoutsideupComponent;
  let fixture: ComponentFixture<ExportpassoutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportpassoutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportpassoutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
