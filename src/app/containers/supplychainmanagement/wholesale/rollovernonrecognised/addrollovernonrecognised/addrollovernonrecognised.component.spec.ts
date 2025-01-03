import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrollovernonrecognisedComponent } from './addrollovernonrecognised.component';

describe('AddrollovernonrecognisedComponent', () => {
  let component: AddrollovernonrecognisedComponent;
  let fixture: ComponentFixture<AddrollovernonrecognisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrollovernonrecognisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrollovernonrecognisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
