import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbreakagefeesComponent } from './editbreakagefees.component';

describe('EditbreakagefeesComponent', () => {
  let component: EditbreakagefeesComponent;
  let fixture: ComponentFixture<EditbreakagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbreakagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbreakagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
