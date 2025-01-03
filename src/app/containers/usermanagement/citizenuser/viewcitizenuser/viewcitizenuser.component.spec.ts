import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcitizenuserComponent } from './viewcitizenuser.component';

describe('ViewcitizenuserComponent', () => {
  let component: ViewcitizenuserComponent;
  let fixture: ComponentFixture<ViewcitizenuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcitizenuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcitizenuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
