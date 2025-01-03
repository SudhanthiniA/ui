import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgrievanceformComponent } from './addgrievanceform.component';

describe('AddgrievanceformComponent', () => {
  let component: AddgrievanceformComponent;
  let fixture: ComponentFixture<AddgrievanceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgrievanceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgrievanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
