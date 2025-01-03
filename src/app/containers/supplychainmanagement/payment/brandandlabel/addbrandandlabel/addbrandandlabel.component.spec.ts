import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandandlabelComponent } from './addbrandandlabel.component';

describe('AddbrandandlabelComponent', () => {
  let component: AddbrandandlabelComponent;
  let fixture: ComponentFixture<AddbrandandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
