import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaltpComponent } from './finaltp.component';

describe('FinaltpComponent', () => {
  let component: FinaltpComponent;
  let fixture: ComponentFixture<FinaltpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaltpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaltpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
