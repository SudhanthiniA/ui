import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaecComponent } from './editaec.component';

describe('EditaecComponent', () => {
  let component: EditaecComponent;
  let fixture: ComponentFixture<EditaecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
