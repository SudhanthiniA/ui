import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwadvancedutyregisterComponent } from './viewmwadvancedutyregister.component';

describe('ViewmwadvancedutyregisterComponent', () => {
  let component: ViewmwadvancedutyregisterComponent;
  let fixture: ComponentFixture<ViewmwadvancedutyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwadvancedutyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwadvancedutyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
