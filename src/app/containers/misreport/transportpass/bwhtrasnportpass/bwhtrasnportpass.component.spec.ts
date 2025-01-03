import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwhtrasnportpassComponent } from './bwhtrasnportpass.component';

describe('BwhtrasnportpassComponent', () => {
  let component: BwhtrasnportpassComponent;
  let fixture: ComponentFixture<BwhtrasnportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwhtrasnportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwhtrasnportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
