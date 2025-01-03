import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandlabelComponent } from './viewbrandlabel.component';

describe('ViewbrandlabelComponent', () => {
  let component: ViewbrandlabelComponent;
  let fixture: ComponentFixture<ViewbrandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
