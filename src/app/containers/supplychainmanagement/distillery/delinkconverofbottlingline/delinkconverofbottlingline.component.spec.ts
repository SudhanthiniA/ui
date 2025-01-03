import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinkconverofbottlinglineComponent } from './delinkconverofbottlingline.component';

describe('DelinkconverofbottlinglineComponent', () => {
  let component: DelinkconverofbottlinglineComponent;
  let fixture: ComponentFixture<DelinkconverofbottlinglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinkconverofbottlinglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinkconverofbottlinglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
