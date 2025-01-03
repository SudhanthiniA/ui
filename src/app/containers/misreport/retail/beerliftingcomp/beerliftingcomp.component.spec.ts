import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerliftingcompComponent } from './beerliftingcomp.component';

describe('BeerliftingcompComponent', () => {
  let component: BeerliftingcompComponent;
  let fixture: ComponentFixture<BeerliftingcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerliftingcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerliftingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
