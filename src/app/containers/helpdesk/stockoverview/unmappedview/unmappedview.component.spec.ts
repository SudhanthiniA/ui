import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmappedviewComponent } from './unmappedview.component';

describe('UnmappedviewComponent', () => {
  let component: UnmappedviewComponent;
  let fixture: ComponentFixture<UnmappedviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmappedviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmappedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
