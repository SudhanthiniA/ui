import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicencecategoryComponent } from './viewlicencecategory.component';

describe('ViewlicencecategoryComponent', () => {
  let component: ViewlicencecategoryComponent;
  let fixture: ComponentFixture<ViewlicencecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicencecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicencecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
