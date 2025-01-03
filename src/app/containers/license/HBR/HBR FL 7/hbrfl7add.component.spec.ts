import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hbrfl7addComponent } from './hbrfl7add.component';

describe('Hbrfl7addComponent', () => {
  let component: Hbrfl7addComponent;
  let fixture: ComponentFixture<Hbrfl7addComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hbrfl7addComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hbrfl7addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
