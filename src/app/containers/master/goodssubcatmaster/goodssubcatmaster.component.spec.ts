import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodssubcatmasterComponent } from './goodssubcatmaster.component';

describe('GoodssubcatmasterComponent', () => {
  let component: GoodssubcatmasterComponent;
  let fixture: ComponentFixture<GoodssubcatmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodssubcatmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodssubcatmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
