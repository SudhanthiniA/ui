import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentprocessinsideupComponent } from './indentprocessinsideup.component';

describe('IndentprocessinsideupComponent', () => {
  let component: IndentprocessinsideupComponent;
  let fixture: ComponentFixture<IndentprocessinsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentprocessinsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentprocessinsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
