import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoveoffinishedgoodsComponent } from './addmoveoffinishedgoods.component';

describe('AddmoveoffinishedgoodsComponent', () => {
  let component: AddmoveoffinishedgoodsComponent;
  let fixture: ComponentFixture<AddmoveoffinishedgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoveoffinishedgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoveoffinishedgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
