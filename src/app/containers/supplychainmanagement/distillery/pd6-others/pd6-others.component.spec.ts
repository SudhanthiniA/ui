import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd6OthersComponent } from './pd6-others.component';

describe('Pd6OthersComponent', () => {
  let component: Pd6OthersComponent;
  let fixture: ComponentFixture<Pd6OthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd6OthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd6OthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
