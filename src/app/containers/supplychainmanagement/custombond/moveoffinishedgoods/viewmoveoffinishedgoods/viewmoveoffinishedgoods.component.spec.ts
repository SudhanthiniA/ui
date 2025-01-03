import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoveoffinishedgoodsComponent } from './viewmoveoffinishedgoods.component';

describe('ViewmoveoffinishedgoodsComponent', () => {
  let component: ViewmoveoffinishedgoodsComponent;
  let fixture: ComponentFixture<ViewmoveoffinishedgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmoveoffinishedgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoveoffinishedgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
