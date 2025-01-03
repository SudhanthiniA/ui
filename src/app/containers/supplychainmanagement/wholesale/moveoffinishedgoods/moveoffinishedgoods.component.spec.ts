import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveoffinishedgoodsComponent } from './moveoffinishedgoods.component';

describe('MoveoffinishedgoodsComponent', () => {
  let component: MoveoffinishedgoodsComponent;
  let fixture: ComponentFixture<MoveoffinishedgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveoffinishedgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveoffinishedgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
