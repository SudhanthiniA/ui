import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchnewComponent } from './dispatchofnewnonregisteruser.component';

describe('DispatchnewComponent', () => {
  let component: DispatchnewComponent;
  let fixture: ComponentFixture<DispatchnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
