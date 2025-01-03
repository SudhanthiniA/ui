import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistillerytypeComponent } from './distillerytype.component';

describe('DistillerytypeComponent', () => {
  let component: DistillerytypeComponent;
  let fixture: ComponentFixture<DistillerytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistillerytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistillerytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
