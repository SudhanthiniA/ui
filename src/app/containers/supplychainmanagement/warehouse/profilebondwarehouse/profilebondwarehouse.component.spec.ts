import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilebondwarehouseComponent } from './profilebondwarehouse.component';

describe('ProfilebondwarehouseComponent', () => {
  let component: ProfilebondwarehouseComponent;
  let fixture: ComponentFixture<ProfilebondwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilebondwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilebondwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
