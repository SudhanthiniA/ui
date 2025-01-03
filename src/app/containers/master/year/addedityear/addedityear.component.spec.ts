import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedityearComponent } from './addedityear.component';

describe('AddedityearComponent', () => {
  let component: AddedityearComponent;
  let fixture: ComponentFixture<AddedityearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedityearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedityearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
