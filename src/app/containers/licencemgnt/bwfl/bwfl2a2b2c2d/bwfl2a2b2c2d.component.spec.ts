import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl2a2b2c2dComponent } from './bwfl2a2b2c2d.component';

describe('Bwfl2a2b2c2dComponent', () => {
  let component: Bwfl2a2b2c2dComponent;
  let fixture: ComponentFixture<Bwfl2a2b2c2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl2a2b2c2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl2a2b2c2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
