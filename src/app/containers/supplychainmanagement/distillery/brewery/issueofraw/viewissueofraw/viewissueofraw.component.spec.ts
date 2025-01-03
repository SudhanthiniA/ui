import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewissueofrawComponent } from './viewissueofraw.component';

describe('ViewissueofrawComponent', () => {
  let component: ViewissueofrawComponent;
  let fixture: ComponentFixture<ViewissueofrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewissueofrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewissueofrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
