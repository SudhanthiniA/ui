import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomplaintagainstexciseofficialComponent } from './addcomplaintagainstexciseofficial.component';

describe('AddcomplaintagainstexciseofficialComponent', () => {
  let component: AddcomplaintagainstexciseofficialComponent;
  let fixture: ComponentFixture<AddcomplaintagainstexciseofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomplaintagainstexciseofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomplaintagainstexciseofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
