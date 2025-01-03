import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitrequestComponent } from './permitrequest.component';

describe('PermitrequestComponent', () => {
  let component: PermitrequestComponent;
  let fixture: ComponentFixture<PermitrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
