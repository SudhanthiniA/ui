import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EalrequestmappedComponent } from './ealrequestmapped.component';

describe('EalrequestmappedComponent', () => {
  let component: EalrequestmappedComponent;
  let fixture: ComponentFixture<EalrequestmappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EalrequestmappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EalrequestmappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
