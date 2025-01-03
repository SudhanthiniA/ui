import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmapassetsandassetsbrandComponent } from './addmapassetsandassetsbrand.component';

describe('AddmapassetsandassetsbrandComponent', () => {
  let component: AddmapassetsandassetsbrandComponent;
  let fixture: ComponentFixture<AddmapassetsandassetsbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmapassetsandassetsbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmapassetsandassetsbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
