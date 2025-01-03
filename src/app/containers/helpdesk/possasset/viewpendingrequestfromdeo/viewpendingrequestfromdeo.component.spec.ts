import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpendingrequestfromdeoComponent } from './viewpendingrequestfromdeo.component';

describe('ViewpendingrequestfromdeoComponent', () => {
  let component: ViewpendingrequestfromdeoComponent;
  let fixture: ComponentFixture<ViewpendingrequestfromdeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpendingrequestfromdeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpendingrequestfromdeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
