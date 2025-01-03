import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgoodssubcatmasterComponent } from './addgoodssubcatmaster.component';

describe('AddgoodssubcatmasterComponent', () => {
  let component: AddgoodssubcatmasterComponent;
  let fixture: ComponentFixture<AddgoodssubcatmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgoodssubcatmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgoodssubcatmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
