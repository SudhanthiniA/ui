import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmappingforoverseasupComponent } from './viewmappingforoverseasup.component';

describe('ViewmappingforoverseasupComponent', () => {
  let component: ViewmappingforoverseasupComponent;
  let fixture: ComponentFixture<ViewmappingforoverseasupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmappingforoverseasupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmappingforoverseasupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
