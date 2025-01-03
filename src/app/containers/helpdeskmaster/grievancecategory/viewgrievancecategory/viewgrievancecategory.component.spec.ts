import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgrievancecategoryComponent } from './viewgrievancecategory.component';

describe('ViewgrievancecategoryComponent', () => {
  let component: ViewgrievancecategoryComponent;
  let fixture: ComponentFixture<ViewgrievancecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgrievancecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgrievancecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
