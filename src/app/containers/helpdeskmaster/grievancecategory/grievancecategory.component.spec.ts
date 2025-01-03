import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievancecategoryComponent } from './grievancecategory.component';

describe('GrievancecategoryComponent', () => {
  let component: GrievancecategoryComponent;
  let fixture: ComponentFixture<GrievancecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievancecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievancecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
