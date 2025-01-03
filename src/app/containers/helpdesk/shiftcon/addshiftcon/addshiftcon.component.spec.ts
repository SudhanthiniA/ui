import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshiftconComponent } from './addshiftcon.component';

describe('AddshiftconComponent', () => {
  let component: AddshiftconComponent;
  let fixture: ComponentFixture<AddshiftconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshiftconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshiftconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
