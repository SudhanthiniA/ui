import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpurchasepermitwithinupComponent } from './viewpurchasepermitwithinup.component';

describe('ViewpurchasepermitwithinupComponent', () => {
  let component: ViewpurchasepermitwithinupComponent;
  let fixture: ComponentFixture<ViewpurchasepermitwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpurchasepermitwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpurchasepermitwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
