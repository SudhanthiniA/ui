import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G6codeComponent } from './g6code.component';

describe('G6codeComponent', () => {
  let component: G6codeComponent;
  let fixture: ComponentFixture<G6codeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G6codeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G6codeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
