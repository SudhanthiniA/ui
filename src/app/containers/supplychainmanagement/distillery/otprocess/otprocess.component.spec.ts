import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtprocessComponent } from './otprocess.component';

describe('OtprocessComponent', () => {
  let component: OtprocessComponent;
  let fixture: ComponentFixture<OtprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
