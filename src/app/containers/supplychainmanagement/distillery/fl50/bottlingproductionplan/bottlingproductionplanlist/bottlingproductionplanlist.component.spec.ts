import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingproductionplanlistComponent } from './bottlingproductionplanlist.component';

describe('BottlingproductionplanlistComponent', () => {
  let component: BottlingproductionplanlistComponent;
  let fixture: ComponentFixture<BottlingproductionplanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingproductionplanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingproductionplanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
