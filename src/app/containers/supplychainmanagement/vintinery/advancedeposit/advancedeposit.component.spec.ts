import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedepositComponent } from './advancedeposit.component'

describe('AdvancedepositComponent', () => {
  let component: AdvancedepositComponent;
  let fixture: ComponentFixture<AdvancedepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
