import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveshmitraserviceComponent } from './niveshmitraservice.component';

describe('NiveshmitraserviceComponent', () => {
  let component: NiveshmitraserviceComponent;
  let fixture: ComponentFixture<NiveshmitraserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveshmitraserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveshmitraserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
