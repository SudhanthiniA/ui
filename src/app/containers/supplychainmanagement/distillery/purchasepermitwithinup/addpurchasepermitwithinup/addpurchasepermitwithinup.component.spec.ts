import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchasepermitwithinupComponent } from './addpurchasepermitwithinup.component';

describe('AddpurchasepermitwithinupComponent', () => {
  let component: AddpurchasepermitwithinupComponent;
  let fixture: ComponentFixture<AddpurchasepermitwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchasepermitwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchasepermitwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
