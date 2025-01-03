import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditlicencetypeComponent } from './addeditlicencetype.component';

describe('AddeditlicencetypeComponent', () => {
  let component: AddeditlicencetypeComponent;
  let fixture: ComponentFixture<AddeditlicencetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditlicencetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditlicencetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
