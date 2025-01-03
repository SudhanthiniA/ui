import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmappedaddComponent } from './unmappedadd.component';

describe('UnmappedaddComponent', () => {
  let component: UnmappedaddComponent;
  let fixture: ComponentFixture<UnmappedaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmappedaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmappedaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
