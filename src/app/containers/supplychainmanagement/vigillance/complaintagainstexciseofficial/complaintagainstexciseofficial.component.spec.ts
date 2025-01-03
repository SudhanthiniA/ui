import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintagainstexciseofficialComponent } from './complaintagainstexciseofficial.component';

describe('ComplaintagainstexciseofficialComponent', () => {
  let component: ComplaintagainstexciseofficialComponent;
  let fixture: ComponentFixture<ComplaintagainstexciseofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintagainstexciseofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintagainstexciseofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
