import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitrequestdraftgatepassComponent } from './permitrequestdraftgatepass.component';

describe('PermitrequestdraftgatepassComponent', () => {
  let component: PermitrequestdraftgatepassComponent;
  let fixture: ComponentFixture<PermitrequestdraftgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitrequestdraftgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitrequestdraftgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
