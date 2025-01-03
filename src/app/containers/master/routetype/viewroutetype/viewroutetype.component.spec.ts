import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewroutetypeComponent } from './viewroutetype.component';

describe('ViewroutetypeComponent', () => {
  let component: ViewroutetypeComponent;
  let fixture: ComponentFixture<ViewroutetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewroutetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewroutetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
