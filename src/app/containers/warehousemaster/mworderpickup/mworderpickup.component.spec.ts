import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MworderpickupComponent } from './mworderpickup.component';

describe('MworderpickupComponent', () => {
  let component: MworderpickupComponent;
  let fixture: ComponentFixture<MworderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MworderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MworderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
