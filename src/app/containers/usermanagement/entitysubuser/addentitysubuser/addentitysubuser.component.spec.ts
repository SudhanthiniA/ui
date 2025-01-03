import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentitysubuserComponent } from './addentitysubuser.component';

describe('AddentitysubuserComponent', () => {
  let component: AddentitysubuserComponent;
  let fixture: ComponentFixture<AddentitysubuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddentitysubuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentitysubuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
