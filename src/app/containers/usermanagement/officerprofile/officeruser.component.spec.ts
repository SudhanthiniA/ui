import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeruserComponent } from './officeruser.component';

describe('OfficeruserComponent', () => {
  let component: OfficeruserComponent;
  let fixture: ComponentFixture<OfficeruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
