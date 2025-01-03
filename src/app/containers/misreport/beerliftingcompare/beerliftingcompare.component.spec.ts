import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerliftingcompareComponent } from './beerliftingcompare.component';

describe('BeerliftingcompareComponent', () => {
  let component: BeerliftingcompareComponent;
  let fixture: ComponentFixture<BeerliftingcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerliftingcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerliftingcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
