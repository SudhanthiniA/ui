import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwtranspasscanmodComponent } from './mwtranspasscanmod.component';

describe('MwtranspasscanmodComponent', () => {
  let component: MwtranspasscanmodComponent;
  let fixture: ComponentFixture<MwtranspasscanmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwtranspasscanmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwtranspasscanmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
