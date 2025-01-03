
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaprequestComponent } from './maprequest.component';

describe('MaprequestComponent', () => {
  let component: MaprequestComponent;
  let fixture: ComponentFixture<MaprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
