import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledisposableComponent } from './sampledisposable.component';

describe('SampledisposableComponent', () => {
  let component: SampledisposableComponent;
  let fixture: ComponentFixture<SampledisposableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampledisposableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledisposableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
