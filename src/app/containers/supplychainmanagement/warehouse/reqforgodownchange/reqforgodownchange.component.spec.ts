import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqforgodownchangeComponent } from './reqforgodownchange.component';

describe('ReqforgodownchangeComponent', () => {
  let component: ReqforgodownchangeComponent;
  let fixture: ComponentFixture<ReqforgodownchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqforgodownchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqforgodownchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
