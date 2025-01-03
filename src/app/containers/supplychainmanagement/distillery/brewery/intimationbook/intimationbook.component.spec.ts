import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimationbookComponent } from './intimationbook.component';

describe('IntimationbookComponent', () => {
  let component: IntimationbookComponent;
  let fixture: ComponentFixture<IntimationbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntimationbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimationbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
