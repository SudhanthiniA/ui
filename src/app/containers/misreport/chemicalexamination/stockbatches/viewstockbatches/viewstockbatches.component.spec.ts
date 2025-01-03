import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockbatchesComponent } from './viewstockbatches.component';

describe('ViewstockbatchesComponent', () => {
  let component: ViewstockbatchesComponent;
  let fixture: ComponentFixture<ViewstockbatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockbatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
