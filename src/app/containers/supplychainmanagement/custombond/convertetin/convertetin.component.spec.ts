import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertetinComponent } from './convertetin.component';

describe('ConvertetinComponent', () => {
  let component: ConvertetinComponent;
  let fixture: ComponentFixture<ConvertetinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertetinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertetinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
