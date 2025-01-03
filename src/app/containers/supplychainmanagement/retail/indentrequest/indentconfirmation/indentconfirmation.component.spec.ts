import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentconfirmationComponent } from './indentconfirmation.component';

describe('IndentconfirmationComponent', () => {
  let component: IndentconfirmationComponent;
  let fixture: ComponentFixture<IndentconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
