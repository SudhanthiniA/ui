import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretailshoptypeComponent } from './addretailshoptype.component';

describe('AddretailshoptypeComponent', () => {
  let component: AddretailshoptypeComponent;
  let fixture: ComponentFixture<AddretailshoptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddretailshoptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretailshoptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
