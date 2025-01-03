import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictwisesaleComponent } from './districtwisesale.component';

describe('DistrictwisesaleComponent', () => {
  let component: DistrictwisesaleComponent;
  let fixture: ComponentFixture<DistrictwisesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictwisesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictwisesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
