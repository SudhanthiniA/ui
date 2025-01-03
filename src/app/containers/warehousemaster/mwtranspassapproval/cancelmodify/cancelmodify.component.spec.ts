import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelmodifyComponent } from './cancelmodify.component';

describe('CancelmodifyComponent', () => {
  let component: CancelmodifyComponent;
  let fixture: ComponentFixture<CancelmodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelmodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
