import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubproductComponent } from './viewsubproduct.component';

describe('ViewsubproductComponent', () => {
  let component: ViewsubproductComponent;
  let fixture: ComponentFixture<ViewsubproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
