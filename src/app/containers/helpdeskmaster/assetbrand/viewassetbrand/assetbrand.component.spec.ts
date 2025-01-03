import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetbrandComponent } from './assetbrand.component';

describe('ViewAssetbrandComponent', () => {
  let component: ViewAssetbrandComponent;
  let fixture: ComponentFixture<ViewAssetbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssetbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssetbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
