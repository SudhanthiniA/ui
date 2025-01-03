import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistComponent } from './mstist.component';

describe('MstistComponent', () => {
  let component: MstistComponent;
  let fixture: ComponentFixture<MstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
