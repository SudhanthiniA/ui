import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl7newComponent } from './bwfl7new.component';

describe('Bwfl7newComponent', () => {
  let component: Bwfl7newComponent;
  let fixture: ComponentFixture<Bwfl7newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl7newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl7newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
