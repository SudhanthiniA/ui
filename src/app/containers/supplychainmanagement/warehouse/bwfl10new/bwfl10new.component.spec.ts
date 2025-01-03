import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl10newComponent } from './bwfl10new.component';

describe('Bwfl10newComponent', () => {
  let component: Bwfl10newComponent;
  let fixture: ComponentFixture<Bwfl10newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl10newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl10newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
