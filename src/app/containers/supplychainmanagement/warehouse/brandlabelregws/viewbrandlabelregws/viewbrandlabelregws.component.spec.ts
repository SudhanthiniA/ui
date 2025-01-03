import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandlabelregwsComponent } from './viewbrandlabelregws.component';

describe('ViewbrandlabelregwsComponent', () => {
  let component: ViewbrandlabelregwsComponent;
  let fixture: ComponentFixture<ViewbrandlabelregwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandlabelregwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandlabelregwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
