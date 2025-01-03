import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedistillationofspiritComponent } from './redistillationofspirit.component';

describe('RedistillationofspiritComponent', () => {
  let component: RedistillationofspiritComponent;
  let fixture: ComponentFixture<RedistillationofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedistillationofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedistillationofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
