import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdamagemissingproductsComponent } from './viewdamagemissingproducts.component';

describe('ViewdamagemissingproductsComponent', () => {
  let component: ViewdamagemissingproductsComponent;
  let fixture: ComponentFixture<ViewdamagemissingproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdamagemissingproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdamagemissingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
