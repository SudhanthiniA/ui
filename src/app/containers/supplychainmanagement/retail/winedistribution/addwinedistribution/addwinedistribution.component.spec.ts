import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwinedistributionComponent } from './addwinedistribution.component';

describe('AddwinedistributionComponent', () => {
  let component: AddwinedistributionComponent;
  let fixture: ComponentFixture<AddwinedistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwinedistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwinedistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
