import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeoComponent } from './editdeo.component';

describe('EditdeoComponent', () => {
  let component: EditdeoComponent;
  let fixture: ComponentFixture<EditdeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
