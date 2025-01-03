import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbeerwastageduringbottlingComponent } from './editbeerwastageduringbottling.component';

describe('EditbeerwastageduringbottlingComponent', () => {
  let component: EditbeerwastageduringbottlingComponent;
  let fixture: ComponentFixture<EditbeerwastageduringbottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbeerwastageduringbottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbeerwastageduringbottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
