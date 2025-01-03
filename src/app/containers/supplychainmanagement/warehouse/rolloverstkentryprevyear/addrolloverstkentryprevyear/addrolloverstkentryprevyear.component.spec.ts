import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrolloverstkentryprevyearComponent } from './addrolloverstkentryprevyear.component';

describe('AddrolloverstkentryprevyearComponent', () => {
  let component: AddrolloverstkentryprevyearComponent;
  let fixture: ComponentFixture<AddrolloverstkentryprevyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrolloverstkentryprevyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrolloverstkentryprevyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
