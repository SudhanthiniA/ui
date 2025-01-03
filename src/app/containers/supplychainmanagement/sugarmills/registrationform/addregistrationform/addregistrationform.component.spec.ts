import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregistrationformComponent } from './addregistrationform.component';

describe('AddregistrationformComponent', () => {
  let component: AddregistrationformComponent;
  let fixture: ComponentFixture<AddregistrationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregistrationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
