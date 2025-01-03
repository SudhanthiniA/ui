import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbrandandlabelComponent } from './editbrandandlabel.component';

describe('EditbrandandlabelComponent', () => {
  let component: EditbrandandlabelComponent;
  let fixture: ComponentFixture<EditbrandandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbrandandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbrandandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
