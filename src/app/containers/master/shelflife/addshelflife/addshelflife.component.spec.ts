import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshelflifeComponent } from './addshelflife.component';

describe('AddshelflifeComponent', () => {
  let component: AddshelflifeComponent;
  let fixture: ComponentFixture<AddshelflifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshelflifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshelflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
