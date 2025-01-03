import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequitionofrawmaterialComponent } from './viewrequitionofrawmaterial.component';

describe('ViewrequitionofrawmaterialComponent', () => {
  let component: ViewrequitionofrawmaterialComponent;
  let fixture: ComponentFixture<ViewrequitionofrawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequitionofrawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequitionofrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
