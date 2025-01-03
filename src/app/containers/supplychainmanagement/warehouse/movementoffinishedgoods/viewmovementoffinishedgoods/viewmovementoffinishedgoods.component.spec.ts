import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmovementoffinishedgoodsComponent } from './viewmovementoffinishedgoods.component';

describe('ViewmovementoffinishedgoodsComponent', () => {
  let component: ViewmovementoffinishedgoodsComponent;
  let fixture: ComponentFixture<ViewmovementoffinishedgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmovementoffinishedgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmovementoffinishedgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
