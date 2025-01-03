import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreakagefeesComponent } from './addbreakagefees.component';

describe('AddbreakagefeesComponent', () => {
  let component: AddbreakagefeesComponent;
  let fixture: ComponentFixture<AddbreakagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbreakagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreakagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
