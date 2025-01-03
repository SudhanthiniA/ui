import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCorporationComponent } from './view-corporation.component';

describe('ViewCorporationComponent', () => {
  let component: ViewCorporationComponent;
  let fixture: ComponentFixture<ViewCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
