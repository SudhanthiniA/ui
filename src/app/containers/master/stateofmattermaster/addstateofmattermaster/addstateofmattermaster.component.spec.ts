import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstateofmattermasterComponent } from './addstateofmattermaster.component';

describe('AddstateofmattermasterComponent', () => {
  let component: AddstateofmattermasterComponent;
  let fixture: ComponentFixture<AddstateofmattermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstateofmattermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstateofmattermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
