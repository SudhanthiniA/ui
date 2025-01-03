import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandlabelregComponent } from './viewbrandlabelreg.component';

describe('ViewbrandlabelregComponent', () => {
  let component: ViewbrandlabelregComponent;
  let fixture: ComponentFixture<ViewbrandlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
