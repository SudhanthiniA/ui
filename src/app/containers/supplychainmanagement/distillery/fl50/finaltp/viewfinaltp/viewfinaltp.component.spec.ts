import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfinaltpComponent } from './viewfinaltp.component';

describe('ViewfinaltpComponent', () => {
  let component: ViewfinaltpComponent;
  let fixture: ComponentFixture<ViewfinaltpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfinaltpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfinaltpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
