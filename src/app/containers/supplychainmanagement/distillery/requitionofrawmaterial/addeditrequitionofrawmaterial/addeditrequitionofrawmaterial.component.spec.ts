import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditrequitionofrawmaterialComponent } from './addeditrequitionofrawmaterial.component';

describe('AddeditrequitionofrawmaterialComponent', () => {
  let component: AddeditrequitionofrawmaterialComponent;
  let fixture: ComponentFixture<AddeditrequitionofrawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditrequitionofrawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditrequitionofrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
