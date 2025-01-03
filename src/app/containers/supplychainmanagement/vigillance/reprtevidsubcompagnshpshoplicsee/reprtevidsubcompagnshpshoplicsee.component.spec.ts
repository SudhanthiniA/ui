import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprtevidsubcompagnshpshoplicseeComponent } from './reprtevidsubcompagnshpshoplicsee.component';

describe('ReprtevidsubcompagnshpshoplicseeComponent', () => {
  let component: ReprtevidsubcompagnshpshoplicseeComponent;
  let fixture: ComponentFixture<ReprtevidsubcompagnshpshoplicseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprtevidsubcompagnshpshoplicseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprtevidsubcompagnshpshoplicseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
