import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwastagefeesComponent } from './editwastagefees.component';

describe('EditwastagefeesComponent', () => {
  let component: EditwastagefeesComponent;
  let fixture: ComponentFixture<EditwastagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditwastagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditwastagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
