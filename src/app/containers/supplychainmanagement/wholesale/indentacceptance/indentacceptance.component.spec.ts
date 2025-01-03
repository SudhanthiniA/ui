import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentacceptanceComponent } from './indentacceptance.component';

describe('IndentacceptanceComponent', () => {
  let component: IndentacceptanceComponent;
  let fixture: ComponentFixture<IndentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
