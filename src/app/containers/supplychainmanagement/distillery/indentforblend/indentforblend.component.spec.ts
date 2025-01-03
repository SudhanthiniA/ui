import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentforblendComponent } from './indentforblend.component';

describe('IndentforblendComponent', () => {
  let component: IndentforblendComponent;
  let fixture: ComponentFixture<IndentforblendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentforblendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentforblendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
