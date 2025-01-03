import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentrequestbycattlefeedComponent } from './indentrequestbycattlefeed.component';

describe('IndentrequestbycattlefeedComponent', () => {
  let component: IndentrequestbycattlefeedComponent;
  let fixture: ComponentFixture<IndentrequestbycattlefeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentrequestbycattlefeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentrequestbycattlefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
