import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexcisecommissionerComponent } from './editexcisecommissioner.component';

describe('EditexcisecommissionerComponent', () => {
  let component: EditexcisecommissionerComponent;
  let fixture: ComponentFixture<EditexcisecommissionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditexcisecommissionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexcisecommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
