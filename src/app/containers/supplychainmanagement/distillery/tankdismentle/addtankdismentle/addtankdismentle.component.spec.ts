import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtankdismentleComponent } from './addtankdismentle.component';

describe('AddtankdismentleComponent', () => {
  let component: AddtankdismentleComponent;
  let fixture: ComponentFixture<AddtankdismentleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtankdismentleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtankdismentleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
