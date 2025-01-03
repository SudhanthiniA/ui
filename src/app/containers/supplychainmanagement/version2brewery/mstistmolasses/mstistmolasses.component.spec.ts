import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistmolassesComponent } from './mstistmolasses.component';

describe('MstistmolassesComponent', () => {
  let component: MstistmolassesComponent;
  let fixture: ComponentFixture<MstistmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
