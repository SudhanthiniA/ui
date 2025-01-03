import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicencetypeComponent } from './viewlicencetype.component';

describe('ViewlicencetypeComponent', () => {
  let component: ViewlicencetypeComponent;
  let fixture: ComponentFixture<ViewlicencetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicencetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicencetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
