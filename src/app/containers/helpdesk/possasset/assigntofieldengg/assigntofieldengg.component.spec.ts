import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntofieldenggComponent } from './assigntofieldengg.component';

describe('AssigntofieldenggComponent', () => {
  let component: AssigntofieldenggComponent;
  let fixture: ComponentFixture<AssigntofieldenggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntofieldenggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntofieldenggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
