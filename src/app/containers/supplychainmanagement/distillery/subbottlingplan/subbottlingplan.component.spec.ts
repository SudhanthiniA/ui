import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbottlingplanComponent } from './subbottlingplan.component';

describe('SubbottlingplanComponent', () => {
  let component: SubbottlingplanComponent;
  let fixture: ComponentFixture<SubbottlingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubbottlingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbottlingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
