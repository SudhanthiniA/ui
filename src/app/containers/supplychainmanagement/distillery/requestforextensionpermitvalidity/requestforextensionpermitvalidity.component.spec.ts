import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforextensionpermitvalidityComponent } from './requestforextensionpermitvalidity.component';

describe('RequestforextensionpermitvalidityComponent', () => {
  let component: RequestforextensionpermitvalidityComponent;
  let fixture: ComponentFixture<RequestforextensionpermitvalidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforextensionpermitvalidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforextensionpermitvalidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
