import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgoodssubcatmasterComponent } from './viewgoodssubcatmaster.component';

describe('ViewgoodssubcatmasterComponent', () => {
  let component: ViewgoodssubcatmasterComponent;
  let fixture: ComponentFixture<ViewgoodssubcatmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgoodssubcatmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgoodssubcatmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
