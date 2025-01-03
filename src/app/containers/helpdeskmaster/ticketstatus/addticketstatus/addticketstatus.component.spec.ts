import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddticketstatusComponent } from './addticketstatus.component';

describe('AddticketstatusComponent', () => {
  let component: AddticketstatusComponent;
  let fixture: ComponentFixture<AddticketstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddticketstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddticketstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
