import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenaturationofspiritComponent } from './denaturationofspirit.component';

describe('DenaturationofspiritComponent', () => {
  let component: DenaturationofspiritComponent;
  let fixture: ComponentFixture<DenaturationofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenaturationofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenaturationofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
