import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsaleofdenaturedfeesComponent } from './editsaleofdenaturedfees.component';

describe('EditsaleofdenaturedfeesComponent', () => {
  let component: EditsaleofdenaturedfeesComponent;
  let fixture: ComponentFixture<EditsaleofdenaturedfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsaleofdenaturedfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsaleofdenaturedfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
