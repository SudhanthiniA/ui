import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitwisependingindrptComponent } from './unitwisependingindrpt.component';

describe('UnitwisependingindrptComponent', () => {
  let component: UnitwisependingindrptComponent;
  let fixture: ComponentFixture<UnitwisependingindrptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitwisependingindrptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitwisependingindrptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
