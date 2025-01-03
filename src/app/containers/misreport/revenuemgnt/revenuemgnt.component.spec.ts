import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuemgntComponent } from './revenuemgnt.component';

describe('RevenuemgntComponent', () => {
  let component: RevenuemgntComponent;
  let fixture: ComponentFixture<RevenuemgntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuemgntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuemgntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
