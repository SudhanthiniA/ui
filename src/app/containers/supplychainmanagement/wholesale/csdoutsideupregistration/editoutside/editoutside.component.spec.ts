import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoutsideComponent } from './editoutside.component';

describe('EditoutsideComponent', () => {
  let component: EditoutsideComponent;
  let fixture: ComponentFixture<EditoutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
