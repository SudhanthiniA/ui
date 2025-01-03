import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewissuetypeComponent } from './viewissuetype.component';

describe('ViewissuetypeComponent', () => {
  let component: ViewissuetypeComponent;
  let fixture: ComponentFixture<ViewissuetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewissuetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewissuetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
