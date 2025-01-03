import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentformolassesComponent } from './indentformolasses.component';

describe('IndentformolassesComponent', () => {
  let component: IndentformolassesComponent;
  let fixture: ComponentFixture<IndentformolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentformolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentformolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
