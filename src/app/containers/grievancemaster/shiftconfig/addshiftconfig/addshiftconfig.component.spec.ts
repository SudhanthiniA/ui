import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshiftconfigComponent } from './addshiftconfig.component';

describe('AddshiftconfigComponent', () => {
  let component: AddshiftconfigComponent;
  let fixture: ComponentFixture<AddshiftconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshiftconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshiftconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
