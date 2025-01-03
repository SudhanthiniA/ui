import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersettingsComponent } from './addusersettings.component';

describe('AddusersettingsComponent', () => {
  let component: AddusersettingsComponent;
  let fixture: ComponentFixture<AddusersettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusersettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
