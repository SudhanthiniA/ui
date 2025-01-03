import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequitionofrawmaterialComponent } from './requitionofrawmaterial.component';

describe('RequitionofrawmaterialComponent', () => {
  let component: RequitionofrawmaterialComponent;
  let fixture: ComponentFixture<RequitionofrawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequitionofrawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequitionofrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
