import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappfortransbeerfilterationComponent } from './addappfortransbeerfilteration.component';

describe('AddappfortransbeerfilterationComponent', () => {
  let component: AddappfortransbeerfilterationComponent;
  let fixture: ComponentFixture<AddappfortransbeerfilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddappfortransbeerfilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddappfortransbeerfilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
