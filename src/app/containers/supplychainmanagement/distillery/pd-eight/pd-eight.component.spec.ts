import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdEightComponent } from './pd-eight.component';

describe('PdEightComponent', () => {
  let component: PdEightComponent;
  let fixture: ComponentFixture<PdEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
