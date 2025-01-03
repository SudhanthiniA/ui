import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl5Component } from './bwfl5.component';

describe('Bwfl5Component', () => {
  let component: Bwfl5Component;
  let fixture: ComponentFixture<Bwfl5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
