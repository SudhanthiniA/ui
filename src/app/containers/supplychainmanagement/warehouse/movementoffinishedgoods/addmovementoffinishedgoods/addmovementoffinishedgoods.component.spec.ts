import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmovementoffinishedgoodsComponent } from './addmovementoffinishedgoods.component';

describe('AddmovementoffinishedgoodsComponent', () => {
  let component: AddmovementoffinishedgoodsComponent;
  let fixture: ComponentFixture<AddmovementoffinishedgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmovementoffinishedgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmovementoffinishedgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
