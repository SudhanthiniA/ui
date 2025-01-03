import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremovalofspiritfordenaturingComponent } from './addremovalofspiritfordenaturing.component';

describe('AddremovalofspiritfordenaturingComponent', () => {
  let component: AddremovalofspiritfordenaturingComponent;
  let fixture: ComponentFixture<AddremovalofspiritfordenaturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddremovalofspiritfordenaturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremovalofspiritfordenaturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
