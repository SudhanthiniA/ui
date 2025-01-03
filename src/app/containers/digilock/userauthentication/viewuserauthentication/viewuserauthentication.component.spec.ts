import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserauthenticationComponent } from './viewuserauthentication.component';

describe('ViewuserauthenticationComponent', () => {
  let component: ViewuserauthenticationComponent;
  let fixture: ComponentFixture<ViewuserauthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserauthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
