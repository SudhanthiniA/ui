import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforaccidentalcaseComponent } from './requestforaccidentalcase.component';

describe('RequestforaccidentalcaseComponent', () => {
  let component: RequestforaccidentalcaseComponent;
  let fixture: ComponentFixture<RequestforaccidentalcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforaccidentalcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforaccidentalcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
