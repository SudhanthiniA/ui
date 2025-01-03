import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsampletestfeesComponent } from './editsampletestfees.component';

describe('EditsampletestfeesComponent', () => {
  let component: EditsampletestfeesComponent;
  let fixture: ComponentFixture<EditsampletestfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsampletestfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsampletestfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
