import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusedforrawmaterialtanktypeComponent } from './addusedforrawmaterialtanktype.component';

describe('AddusedforrawmaterialtanktypeComponent', () => {
  let component: AddusedforrawmaterialtanktypeComponent;
  let fixture: ComponentFixture<AddusedforrawmaterialtanktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusedforrawmaterialtanktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusedforrawmaterialtanktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
