import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvendortemplateComponent } from './addvendortemplate.component';

describe('AddvendortemplateComponent', () => {
  let component: AddvendortemplateComponent;
  let fixture: ComponentFixture<AddvendortemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvendortemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvendortemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
