import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G6registerComponent } from './g6register.component';

describe('G6registerComponent', () => {
  let component: G6registerComponent;
  let fixture: ComponentFixture<G6registerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G6registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G6registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
