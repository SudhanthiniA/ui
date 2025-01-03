import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnfillinglistComponent } from './returnfillinglist.component';

describe('ReturnfillinglistComponent', () => {
  let component: ReturnfillinglistComponent;
  let fixture: ComponentFixture<ReturnfillinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnfillinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnfillinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
