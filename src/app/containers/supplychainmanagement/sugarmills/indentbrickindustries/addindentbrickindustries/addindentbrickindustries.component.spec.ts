import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentbrickindustriesComponent } from './addindentbrickindustries.component';

describe('AddindentbrickindustriesComponent', () => {
  let component: AddindentbrickindustriesComponent;
  let fixture: ComponentFixture<AddindentbrickindustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentbrickindustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentbrickindustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
