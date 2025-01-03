import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgeneratecodeComponent } from './addgeneratecode.component';

describe('AddgeneratecodeComponent', () => {
  let component: AddgeneratecodeComponent;
  let fixture: ComponentFixture<AddgeneratecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgeneratecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgeneratecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
