import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnarcoticexportComponent } from './viewnarcoticexport.component';

describe('ViewnarcoticexportComponent', () => {
  let component: ViewnarcoticexportComponent;
  let fixture: ComponentFixture<ViewnarcoticexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnarcoticexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnarcoticexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
