import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewintimationbookComponent } from './viewintimationbook.component';

describe('ViewintimationbookComponent', () => {
  let component: ViewintimationbookComponent;
  let fixture: ComponentFixture<ViewintimationbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewintimationbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewintimationbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
