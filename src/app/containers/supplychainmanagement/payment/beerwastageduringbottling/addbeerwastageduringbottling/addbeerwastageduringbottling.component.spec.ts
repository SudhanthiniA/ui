import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeerwastageduringbottlingComponent } from './addbeerwastageduringbottling.component';

describe('AddbeerwastageduringbottlingComponent', () => {
  let component: AddbeerwastageduringbottlingComponent;
  let fixture: ComponentFixture<AddbeerwastageduringbottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbeerwastageduringbottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbeerwastageduringbottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
