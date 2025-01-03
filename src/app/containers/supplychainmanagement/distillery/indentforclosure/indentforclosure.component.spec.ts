import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentforclosureComponent } from './indentforclosure.component';

describe('IndentforclosureComponent', () => {
  let component: IndentforclosureComponent;
  let fixture: ComponentFixture<IndentforclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentforclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentforclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
