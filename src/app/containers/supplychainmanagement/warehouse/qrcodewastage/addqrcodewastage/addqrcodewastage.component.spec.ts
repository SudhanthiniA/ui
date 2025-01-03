import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqrcodewastageComponent } from './addqrcodewastage.component';

describe('AddqrcodewastageComponent', () => {
  let component: AddqrcodewastageComponent;
  let fixture: ComponentFixture<AddqrcodewastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqrcodewastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqrcodewastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
