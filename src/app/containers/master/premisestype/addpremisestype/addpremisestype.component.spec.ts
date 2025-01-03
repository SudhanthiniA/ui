import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpremisestypeComponent } from './addpremisestype.component';

describe('AddpremisestypeComponent', () => {
  let component: AddpremisestypeComponent;
  let fixture: ComponentFixture<AddpremisestypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpremisestypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpremisestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
