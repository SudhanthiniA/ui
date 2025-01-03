import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsuptionComponent } from './view-consuption.component';

describe('ViewConsuptionComponent', () => {
  let component: ViewConsuptionComponent;
  let fixture: ComponentFixture<ViewConsuptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConsuptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConsuptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
