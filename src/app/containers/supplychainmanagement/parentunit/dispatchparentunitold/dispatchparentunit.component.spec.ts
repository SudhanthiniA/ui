import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchparentunitComponent } from './dispatchparentunit.component';

describe('DispatchparentunitComponent', () => {
  let component: DispatchparentunitComponent;
  let fixture: ComponentFixture<DispatchparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
