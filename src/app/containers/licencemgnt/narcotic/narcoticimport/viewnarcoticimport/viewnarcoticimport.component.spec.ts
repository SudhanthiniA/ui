import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnarcoticimportComponent } from './viewnarcoticimport.component';

describe('ViewnarcoticimportComponent', () => {
  let component: ViewnarcoticimportComponent;
  let fixture: ComponentFixture<ViewnarcoticimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnarcoticimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnarcoticimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
