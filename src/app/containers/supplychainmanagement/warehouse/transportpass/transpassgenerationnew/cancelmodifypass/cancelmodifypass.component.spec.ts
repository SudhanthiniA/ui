import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelmodifypassComponent } from './cancelmodifypass.component';

describe('CancelmodifypassComponent', () => {
  let component: CancelmodifypassComponent;
  let fixture: ComponentFixture<CancelmodifypassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelmodifypassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelmodifypassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
