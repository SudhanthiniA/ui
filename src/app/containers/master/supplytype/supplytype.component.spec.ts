import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplytypeComponent } from './supplytype.component';

describe('SupplytypeComponent', () => {
  let component: SupplytypeComponent;
  let fixture: ComponentFixture<SupplytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
