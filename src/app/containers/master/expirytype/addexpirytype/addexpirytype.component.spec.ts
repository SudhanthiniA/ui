import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpirytypeComponent } from './addexpirytype.component';

describe('AddexpirytypeComponent', () => {
  let component: AddexpirytypeComponent;
  let fixture: ComponentFixture<AddexpirytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexpirytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexpirytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
