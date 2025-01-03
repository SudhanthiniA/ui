import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentitytypeComponent } from './addentitytype.component';

describe('AddentitytypeComponent', () => {
  let component: AddentitytypeComponent;
  let fixture: ComponentFixture<AddentitytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddentitytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentitytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
