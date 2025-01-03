import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprintqrcodeComponent } from './addprintqrcode.component';

describe('AddprintqrcodeComponent', () => {
  let component: AddprintqrcodeComponent;
  let fixture: ComponentFixture<AddprintqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprintqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprintqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
