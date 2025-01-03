import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwastagefeesComponent } from './addwastagefees.component';

describe('AddwastagefeesComponent', () => {
  let component: AddwastagefeesComponent;
  let fixture: ComponentFixture<AddwastagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwastagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwastagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
