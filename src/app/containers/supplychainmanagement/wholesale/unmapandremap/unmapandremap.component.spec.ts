import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmapandremapComponent } from './unmapandremap.component';

describe('UnmapandremapComponent', () => {
  let component: UnmapandremapComponent;
  let fixture: ComponentFixture<UnmapandremapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmapandremapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmapandremapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
