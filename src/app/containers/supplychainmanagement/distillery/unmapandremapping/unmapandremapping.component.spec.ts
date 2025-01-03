import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmapandremappingComponent } from './unmapandremapping.component';

describe('UnmapandremappingComponent', () => {
  let component: UnmapandremappingComponent;
  let fixture: ComponentFixture<UnmapandremappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmapandremappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmapandremappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
