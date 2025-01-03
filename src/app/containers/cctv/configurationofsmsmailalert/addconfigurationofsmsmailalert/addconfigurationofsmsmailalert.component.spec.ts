import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconfigurationofsmsmailalertComponent } from './addconfigurationofsmsmailalert.component';

describe('AddconfigurationofsmsmailalertComponent', () => {
  let component: AddconfigurationofsmsmailalertComponent;
  let fixture: ComponentFixture<AddconfigurationofsmsmailalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconfigurationofsmsmailalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconfigurationofsmsmailalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
