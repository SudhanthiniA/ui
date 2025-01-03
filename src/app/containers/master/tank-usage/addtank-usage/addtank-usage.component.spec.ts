import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtankUsageComponent } from './addtank-usage.component';

describe('AddtankUsageComponent', () => {
  let component: AddtankUsageComponent;
  let fixture: ComponentFixture<AddtankUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtankUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtankUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
