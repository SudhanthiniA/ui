import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchexportpermitComponent } from './dispatchexportpermit.component';

describe('DispatchexportpermitComponent', () => {
  let component: DispatchexportpermitComponent;
  let fixture: ComponentFixture<DispatchexportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchexportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchexportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
