import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetbrandsComponent } from './devicehardwarename.component';

describe('AssetbrandsComponent', () => {
  let component: AssetbrandsComponent;
  let fixture: ComponentFixture<AssetbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
