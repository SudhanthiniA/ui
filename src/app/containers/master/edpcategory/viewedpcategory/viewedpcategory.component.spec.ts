import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedpcategoryComponent } from './viewedpcategory.component';

describe('ViewedpcategoryComponent', () => {
  let component: ViewedpcategoryComponent;
  let fixture: ComponentFixture<ViewedpcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewedpcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedpcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
