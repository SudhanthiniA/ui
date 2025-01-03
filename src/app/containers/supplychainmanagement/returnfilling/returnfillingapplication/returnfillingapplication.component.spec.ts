import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnfillingapplicationComponent } from './returnfillingapplication.component';

describe('ReturnfillingapplicationComponent', () => {
  let component: ReturnfillingapplicationComponent;
  let fixture: ComponentFixture<ReturnfillingapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnfillingapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnfillingapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
