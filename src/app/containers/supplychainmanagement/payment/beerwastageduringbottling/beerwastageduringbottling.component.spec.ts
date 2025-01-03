import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerwastageduringbottlingComponent } from './beerwastageduringbottling.component';

describe('BeerwastageduringbottlingComponent', () => {
  let component: BeerwastageduringbottlingComponent;
  let fixture: ComponentFixture<BeerwastageduringbottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerwastageduringbottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerwastageduringbottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
