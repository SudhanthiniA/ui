import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G6reportComponent } from './g6report.component';

describe('G6reportComponent', () => {
  let component: G6reportComponent;
  let fixture: ComponentFixture<G6reportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G6reportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G6reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
