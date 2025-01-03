import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabelComponent } from './brandlabel.component';

describe('BrandlabelComponent', () => {
  let component: BrandlabelComponent;
  let fixture: ComponentFixture<BrandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
