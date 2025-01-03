import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivefromginplantComponent } from './receivefromginplant.component';

describe('ReceivefromginplantComponent', () => {
  let component: ReceivefromginplantComponent;
  let fixture: ComponentFixture<ReceivefromginplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivefromginplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivefromginplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
