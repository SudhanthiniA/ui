import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeerpermitroomComponent } from './addbeerpermitroom.component'

describe('AddbeerpermitroomComponent', () => {
  let component: AddbeerpermitroomComponent;
  let fixture: ComponentFixture<AddbeerpermitroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbeerpermitroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbeerpermitroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
