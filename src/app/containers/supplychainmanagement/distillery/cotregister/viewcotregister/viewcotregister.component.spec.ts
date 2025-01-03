import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcotregisterComponent } from './viewcotregister.component';

describe('ViewcotregisterComponent', () => {
  let component: ViewcotregisterComponent;
  let fixture: ComponentFixture<ViewcotregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcotregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcotregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
