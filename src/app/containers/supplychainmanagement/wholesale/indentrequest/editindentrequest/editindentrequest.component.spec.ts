import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditindentrequestComponent } from './editindentrequest.component';

describe('EditindentrequestComponent', () => {
  let component: EditindentrequestComponent;
  let fixture: ComponentFixture<EditindentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditindentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditindentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
