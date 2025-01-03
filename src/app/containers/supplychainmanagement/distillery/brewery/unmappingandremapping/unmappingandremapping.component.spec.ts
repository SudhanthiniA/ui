import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmappingandremappingComponent } from './unmappingandremapping.component';

describe('UnmappingandremappingComponent', () => {
  let component: UnmappingandremappingComponent;
  let fixture: ComponentFixture<UnmappingandremappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmappingandremappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmappingandremappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
