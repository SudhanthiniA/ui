import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuetypeComponent } from './issuetype.component';

describe('IssuetypeComponent', () => {
  let component: IssuetypeComponent;
  let fixture: ComponentFixture<IssuetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
