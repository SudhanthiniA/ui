import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdispatchreportComponent } from './prodispatchreport.component';

describe('ProdispatchreportComponent', () => {
  let component: ProdispatchreportComponent;
  let fixture: ComponentFixture<ProdispatchreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdispatchreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdispatchreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
