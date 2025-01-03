import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpermitrequestdraftgatepassComponent } from './viewpermitrequestdraftgatepass.component';

describe('ViewpermitrequestdraftgatepassComponent', () => {
  let component: ViewpermitrequestdraftgatepassComponent;
  let fixture: ComponentFixture<ViewpermitrequestdraftgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpermitrequestdraftgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpermitrequestdraftgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
