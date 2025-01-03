import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyforsaleComponent } from './readyforsale.component';

describe('ReadyforsaleComponent', () => {
  let component: ReadyforsaleComponent;
  let fixture: ComponentFixture<ReadyforsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyforsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
