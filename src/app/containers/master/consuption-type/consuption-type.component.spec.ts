import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsuptionTypeComponent } from './consuption-type.component';

describe('ConsuptionTypeComponent', () => {
  let component: ConsuptionTypeComponent;
  let fixture: ComponentFixture<ConsuptionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsuptionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsuptionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
