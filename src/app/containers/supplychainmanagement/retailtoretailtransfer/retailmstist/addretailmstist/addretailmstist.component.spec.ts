import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretailmstistComponent } from './addretailmstist.component';

describe('AddretailmstistComponent', () => {
  let component: AddretailmstistComponent;
  let fixture: ComponentFixture<AddretailmstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddretailmstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretailmstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
