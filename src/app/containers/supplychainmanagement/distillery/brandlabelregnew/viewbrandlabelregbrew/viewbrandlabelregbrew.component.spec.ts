import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandlabelregbrewComponent } from './viewbrandlabelregbrew.component';

describe('ViewbrandlabelregbrewComponent', () => {
  let component: ViewbrandlabelregbrewComponent;
  let fixture: ComponentFixture<ViewbrandlabelregbrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandlabelregbrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandlabelregbrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
