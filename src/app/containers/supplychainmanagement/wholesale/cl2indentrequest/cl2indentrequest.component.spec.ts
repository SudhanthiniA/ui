import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl2indentrequestComponent } from './cl2indentrequest.component';

describe('Cl2indentrequestComponent', () => {
  let component: Cl2indentrequestComponent;
  let fixture: ComponentFixture<Cl2indentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl2indentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl2indentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
