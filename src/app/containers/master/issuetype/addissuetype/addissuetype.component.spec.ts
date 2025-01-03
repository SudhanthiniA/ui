import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissuetypeComponent } from './addissuetype.component';

describe('AddissuetypeComponent', () => {
  let component: AddissuetypeComponent;
  let fixture: ComponentFixture<AddissuetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddissuetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddissuetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
