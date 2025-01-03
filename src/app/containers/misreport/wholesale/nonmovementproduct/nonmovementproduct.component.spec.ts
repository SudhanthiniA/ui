import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonmovementproductComponent } from './nonmovementproduct.component';

describe('NonmovementproductComponent', () => {
  let component: NonmovementproductComponent;
  let fixture: ComponentFixture<NonmovementproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonmovementproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonmovementproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
