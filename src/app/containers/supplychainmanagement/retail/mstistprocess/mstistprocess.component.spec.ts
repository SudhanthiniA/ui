import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistprocessComponent } from './mstistprocess.component';

describe('MstistprocessComponent', () => {
  let component: MstistprocessComponent;
  let fixture: ComponentFixture<MstistprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
