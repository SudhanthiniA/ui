import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd10formComponent } from './pd10form.component';

describe('Pd10formComponent', () => {
  let component: Pd10formComponent;
  let fixture: ComponentFixture<Pd10formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd10formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd10formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
