import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdexportComponent } from './csdexport.component';

describe('CsdexportComponent', () => {
  let component: CsdexportComponent;
  let fixture: ComponentFixture<CsdexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
