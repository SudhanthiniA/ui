import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecbComponent } from './profilecb.component';

describe('ProfilecbComponent', () => {
  let component: ProfilecbComponent;
  let fixture: ComponentFixture<ProfilecbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
