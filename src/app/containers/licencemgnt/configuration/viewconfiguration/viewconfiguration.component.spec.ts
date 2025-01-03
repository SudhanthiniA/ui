import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconfigurationComponent } from './viewconfiguration.component';

describe('ViewconfigurationComponent', () => {
  let component: ViewconfigurationComponent;
  let fixture: ComponentFixture<ViewconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
