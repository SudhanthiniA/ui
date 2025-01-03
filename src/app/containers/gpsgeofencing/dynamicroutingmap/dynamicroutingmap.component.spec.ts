import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicroutingmapComponent } from './dynamicroutingmap.component';

describe('DynamicroutingmapComponent', () => {
  let component: DynamicroutingmapComponent;
  let fixture: ComponentFixture<DynamicroutingmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicroutingmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicroutingmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
