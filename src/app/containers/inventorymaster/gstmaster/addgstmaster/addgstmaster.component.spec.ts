import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgstmasterComponent } from './addgstmaster.component';

describe('AddgstmasterComponent', () => {
  let component: AddgstmasterComponent;
  let fixture: ComponentFixture<AddgstmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgstmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgstmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
