import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaulkComponent } from './add-taulk.component';

describe('AddTaulkComponent', () => {
  let component: AddTaulkComponent;
  let fixture: ComponentFixture<AddTaulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
