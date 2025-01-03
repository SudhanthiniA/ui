import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomplaintagainstexciseofficialComponent } from './viewcomplaintagainstexciseofficial.component';

describe('ViewcomplaintagainstexciseofficialComponent', () => {
  let component: ViewcomplaintagainstexciseofficialComponent;
  let fixture: ComponentFixture<ViewcomplaintagainstexciseofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomplaintagainstexciseofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcomplaintagainstexciseofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
