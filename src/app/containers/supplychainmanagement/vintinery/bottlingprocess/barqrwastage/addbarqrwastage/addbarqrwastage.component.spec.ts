import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbarqrwastageComponent } from './addbarqrwastage.component';

describe('AddbarqrwastageComponent', () => {
  let component: AddbarqrwastageComponent;
  let fixture: ComponentFixture<AddbarqrwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbarqrwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbarqrwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
