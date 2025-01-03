import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldofficerlistComponent } from './fieldofficerlist.component';

describe('FieldofficerlistComponent', () => {
  let component: FieldofficerlistComponent;
  let fixture: ComponentFixture<FieldofficerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldofficerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldofficerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
