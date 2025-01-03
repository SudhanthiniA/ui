import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdecComponent } from './editdec.component';

describe('EditdecComponent', () => {
  let component: EditdecComponent;
  let fixture: ComponentFixture<EditdecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
