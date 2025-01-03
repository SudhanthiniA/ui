import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexportindentliquorComponent } from './addexportindentliquor.component';

describe('AddexportindentliquorComponent', () => {
  let component: AddexportindentliquorComponent;
  let fixture: ComponentFixture<AddexportindentliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexportindentliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexportindentliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
