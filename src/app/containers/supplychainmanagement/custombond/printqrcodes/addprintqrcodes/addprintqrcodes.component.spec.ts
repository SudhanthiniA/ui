import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprintqrcodesComponent } from './addprintqrcodes.component';

describe('AddprintqrcodesComponent', () => {
  let component: AddprintqrcodesComponent;
  let fixture: ComponentFixture<AddprintqrcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprintqrcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprintqrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
