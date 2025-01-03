import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabelregwsComponent } from './brandlabelregws.component';

describe('BrandlabelregwsComponent', () => {
  let component: BrandlabelregwsComponent;
  let fixture: ComponentFixture<BrandlabelregwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabelregwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabelregwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
