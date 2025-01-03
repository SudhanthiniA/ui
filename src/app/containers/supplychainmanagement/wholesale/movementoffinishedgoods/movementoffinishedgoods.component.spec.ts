import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementoffinishedgoodsComponent } from './movementoffinishedgoods.component';

describe('MovementoffinishedgoodsComponent', () => {
  let component: MovementoffinishedgoodsComponent;
  let fixture: ComponentFixture<MovementoffinishedgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementoffinishedgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementoffinishedgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
