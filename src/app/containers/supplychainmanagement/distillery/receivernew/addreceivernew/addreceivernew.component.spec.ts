import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreceivernewComponent } from './addreceivernew.component';

describe('AddreceivernewComponent', () => {
  let component: AddreceivernewComponent;
  let fixture: ComponentFixture<AddreceivernewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreceivernewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreceivernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
