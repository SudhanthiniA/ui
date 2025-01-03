import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewticketstatusComponent } from './viewticketstatus.component';

describe('ViewticketstatusComponent', () => {
  let component: ViewticketstatusComponent;
  let fixture: ComponentFixture<ViewticketstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewticketstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewticketstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
