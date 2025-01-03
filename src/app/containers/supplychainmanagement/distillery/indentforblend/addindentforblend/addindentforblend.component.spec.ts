import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentforblendComponent } from './addindentforblend.component';

describe('AddindentforblendComponent', () => {
  let component: AddindentforblendComponent;
  let fixture: ComponentFixture<AddindentforblendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentforblendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentforblendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
