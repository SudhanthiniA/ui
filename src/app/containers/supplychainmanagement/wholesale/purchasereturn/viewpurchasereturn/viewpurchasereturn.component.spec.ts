import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpurchasereturnComponent } from './viewpurchasereturn.component';

describe('ViewpurchasereturnComponent', () => {
  let component: ViewpurchasereturnComponent;
  let fixture: ComponentFixture<ViewpurchasereturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpurchasereturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpurchasereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
