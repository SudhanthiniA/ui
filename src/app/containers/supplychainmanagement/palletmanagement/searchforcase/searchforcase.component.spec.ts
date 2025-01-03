import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforcaseComponent } from './searchforcase.component';

describe('SearchforcaseComponent', () => {
  let component: SearchforcaseComponent;
  let fixture: ComponentFixture<SearchforcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchforcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchforcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
